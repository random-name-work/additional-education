import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserPhoneDto } from './dto/create-user-phone.dto';
import { CreateUserEmailDto } from './dto/create-user-email.dto';
import { error } from 'console';

@Injectable()
export class UserService {
    constructor(private readonly databaseService: DatabaseService) { }

    async getUsers() {
        return this.databaseService.user.findMany()
    }

    async getUsersInfos() {
        return this.databaseService.userInfo.findMany()
    }

    async getOneUser(id: number) {
        return this.databaseService.user.findUnique({
            where: {
                id
            }
        })
    }

    async createUserPhone(dto: CreateUserPhoneDto) {
        return this.databaseService.user.create({
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
        return this.databaseService.user.create({
            data: {
                phoneNum: dto.email,
                password: dto.password,
                userInfo: {
                    create: {}
                }
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
