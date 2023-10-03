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

        // check user in db
        const findUser = this.databaseService.user.findUnique({
            where: {
                phoneNum: dto.phoneNum
            }
        })
        if (await findUser) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: 'User with this phone already exist',
            },
                HttpStatus.CONFLICT
            );
        }

        // create user
        return await this.databaseService.user.create({
            data: {
                phoneNum: dto.phoneNum,
                password: dto.password,
                userInfo: {
                    create: {}
                }
            }
        })

    }

    async createUserEmail(dto: CreateUserEmailDto) {
        
        // check user in db
        const findUser = this.databaseService.user.findUnique({
            where: {
                email: dto.email
            }
        })
        if (await findUser) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: 'User with this email already exist',
            },
                HttpStatus.CONFLICT
            );
        }

        // create user
        return await this.databaseService.user.create({
            data: {
                phoneNum: dto.email,
                password: dto.password,
                userInfo: {
                    create: {}
                }
            }
        })
    }

    async changeUserData(id: number, dto: ChangeUserData){
        return await this.databaseService.user.update({
            where:{
                id
            },
            data:{
                ...dto
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
