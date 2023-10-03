import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserPhoneDto } from './dto/create-user-phone.dto';
import { CreateUserEmailDto } from './dto/create-user-email.dto';
import { error } from 'console';
import { ChangeUserData } from './dto/change-user-data.dto';

@Injectable()
export class UserService {
    constructor(private readonly databaseService: DatabaseService) { }

    async getUsers() {
        return await this.databaseService.user.findMany()
    }

    async getUsersInfos() {
        return await this.databaseService.userInfo.findMany()
    }

    async getOneUser(id: number) {
        return await this.databaseService.user.findUnique({
            where: {
                id
            }
        })
    }

    async createUserPhone(dto: CreateUserPhoneDto) {
        try {
            const res = await this.databaseService.user.create({
                data: {
                    phoneNum: dto.phoneNum,
                    password: dto.password,
                    userInfo: {
                        create: {}
                    }
                }
            })
            return res
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error,
            },
                HttpStatus.CONFLICT
            );
        }
    }

    async createUserEmail(dto: CreateUserEmailDto) {
        try {
            const res = await this.databaseService.user.create({
                data: {
                    phoneNum: dto.email,
                    password: dto.password,
                    userInfo: {
                        create: {}
                    }
                }
            })
            return res

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error,
            },
                HttpStatus.CONFLICT
            );
        }
    }

    async changeUserData(id: number, dto: ChangeUserData){
        return await this.databaseService.user.update({
            where:{
                id
            },
            data:{
                email: dto?.email,
                phoneNum: dto?.phoneNum,
                password: dto?.password,
                jwt: dto?.jwt
            }
        })
    }

    async delUser(id: number) {

        // check user in db
        const findUser = this.databaseService.user.findUnique({
            where: {
                id
            }
        })
        if (!(await findUser)) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'User not found',
            },
                HttpStatus.NOT_FOUND
            );
        }

        // deleting user
        const delUser = this.databaseService.user.delete({
            where: {
                id,
            }
        })

        return delUser
    }
}
