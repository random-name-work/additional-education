import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { JwtService } from 'src/jwt/jwt.service';
import { CreateUserPhoneDto } from './dto/create-user-phone.dto';
import { CreateUserEmailDto } from './dto/create-user-email.dto';
import { LoginUserPhone } from './dto/login-user-phone.dto';
import { LoginUserEmail } from './dto/login-user-email.dto';
import * as bcrypt from "bcrypt";
import { CheckJwt } from './dto/check-jwt.dto';

@Injectable()
export class AuthService {
    constructor(private readonly databaseService: DatabaseService,
        private readonly jwtService: JwtService) { }

    async createUserPhone(dto: CreateUserPhoneDto) {
        try {
            const hashPass = await bcrypt.hash(dto.password, 7);
            const jwt = this.jwtService.generateJwt(dto.phoneNum)
            const res = await this.databaseService.user.create({
                data: {
                    phoneNum: dto.phoneNum,
                    password: hashPass,
                    jwt,
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
            const jwt = this.jwtService.generateJwt(dto.email)
            const res = await this.databaseService.user.create({
                data: {
                    email: dto.email,
                    password: hashPass,
                    jwt,
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

    async checkJwt(dto: CheckJwt) {
        const res = this.jwtService.checkToken(dto.jwt)
        const user = await this.databaseService.user.findFirst({
            where: {
                OR: [
                    {
                        phoneNum: res.phoneOrEmail
                    },
                    {
                        email: res.phoneOrEmail
                    }
                ]
            }
        })
        return { ...res, user }
    }

    async loginUserPhone(dto: LoginUserPhone) {
        try {
            if (dto.jwt) {
                const jwtCheck = this.jwtService.checkToken(dto.jwt)

                if (!jwtCheck) {
                    return
                }

                return jwtCheck
            }
        } catch (error) {
            return error
        }
    }

    async loginUserEmail(dto: LoginUserEmail) {

    }
}
