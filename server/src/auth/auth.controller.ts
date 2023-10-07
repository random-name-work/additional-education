import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserPhoneDto } from './dto/create-user-phone.dto';
import { AuthService } from './auth.service';
import { CreateUserEmailDto } from './dto/create-user-email.dto';
import { LoginUserPhone } from './dto/login-user-phone.dto';
import { LoginUserEmail } from './dto/login-user-email.dto';
import { CheckJwt } from './dto/check-jwt.dto';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @UsePipes(new ValidationPipe())
    @Post("createPhone")
    @HttpCode(201)
    async createUserPhone(@Body() dto: CreateUserPhoneDto){
        const res = this.authService.createUserPhone(dto)
        return res
    }

    @UsePipes(new ValidationPipe())
    @Post("createEmail")
    @HttpCode(201)
    async createUserEmail(@Body() dto: CreateUserEmailDto){
        const res = this.authService.createUserEmail(dto)
        return res
    }

    @Post("checkJwt")
    async checkJwt(@Body() dto: CheckJwt){
        const res = this.authService.checkJwt(dto)
        return res
    }

    @UsePipes(new ValidationPipe())
    @Post("loginPhone")
    @HttpCode(201)
    async loginPhone(@Body() dto: LoginUserPhone){
        const res = this.authService.loginUserPhone(dto)
        return res
    }

    @UsePipes(new ValidationPipe())
    @Post("loginEmail")
    async loginEmail(@Body() dto: LoginUserEmail){
        const res = this.authService.loginUserEmail(dto)
        return res
    }
}
