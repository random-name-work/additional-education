import { Injectable } from '@nestjs/common';
import bcrypt from "bcrypt";
import { DatabaseService } from 'src/database/database.service';
import { CreateUserPhoneDto } from './dto/create-user-phone.dto';
import { CreateUserEmailDto } from './dto/create-user-email.dto';
import { ChangeUserData } from './dto/change-user-data.dto';
import { ChangeUserInfo } from './dto/change-user-info.dto';
import { LoginUserPhone } from './dto/login-user-phone.dto';
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
            const hashPass = await bcrypt.hash(dto.password, 7);
            const res = await this.databaseService.user.create({
                data: {
                    phoneNum: dto.phoneNum,
                    password: hashPass,
                    userInfo: {
                        create: {}
                    },
                    roles: {
                        create: [{
                            role: {
                                connect: {
                                    roleName: "USER"
                                }
                            }
                        }]
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async createUserEmail(dto: CreateUserEmailDto) {
        try {
            const hashPass = await bcrypt.hash(dto.password, 7);
            const res = await this.databaseService.user.create({
                data: {
                    email: dto.email,
                    password: hashPass,
                    userInfo: {
                        create: {}
                    },
                    roles: {
                        create: [{
                            role: {
                                connect: {
                                    roleName: "USER"
                                }
                            }
                        }]
                    }
                }
            })
            return res

        } catch (error) {
            return error
        }
    }

    async changeUserData(id: number, dto: ChangeUserData) {
        try {
            const res = await this.databaseService.user.update({
                where: {
                    id
                },
                data: {
                    ...dto
                }
            })
            return res
        } catch (error) {
            return error
        }


    }

    async changeUserInfo(id: number, dto: ChangeUserInfo) {
        try {
            const res = await this.databaseService.userInfo.update({
                where: {
                    userId: id
                },
                data: {
                    ...dto
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async delUser(id: number) {
        try {
            const res = await this.databaseService.user.delete({
                where: {
                    id,
                }
            })

            return res

        } catch (error) {
            return error
        }
    }
}
