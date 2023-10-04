import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserPhoneDto } from './dto/create-user-phone.dto';
import { UserService } from './user.service';
import { CreateUserEmailDto } from './dto/create-user-email.dto';
import { ChangeUserData } from './dto/change-user-data.dto';
import { ChangeUserInfo } from './dto/change-user-info.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async getAll(){
        const res = this.userService.getUsers()
        return res
    }

    @Get("info")
    async getAllInfos(){
        const res = this.userService.getUsersInfos()
        return res
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        // +id because id: string, idk why
        const res = this.userService.getOneUser(+id)
        return res
    }

    @UsePipes(new ValidationPipe())
    @Post("createPhone")
    @HttpCode(201)
    async createUserPhone(@Body() dto: CreateUserPhoneDto){
        const res = this.userService.createUserPhone(dto)
        return res
    }

    @UsePipes(new ValidationPipe())
    @Post("createEmail")
    @HttpCode(201)
    async createUserEmail(@Body() dto: CreateUserEmailDto){
        const res = this.userService.createUserEmail(dto)
        return res
    }

    @UsePipes(new ValidationPipe())
    @Put("changeUserData/:id")
    @HttpCode(201)
    async ChangeUserData(@Param("id") id: number, @Body() dto: ChangeUserData){
        const res = this.userService.changeUserData(+id, dto)
        return res
    }

    @UsePipes(new ValidationPipe())
    @Put("changeUserInfo/:id")
    @HttpCode(201)
    async ChangeUserInfo(@Param("id") id: number, @Body() dto: ChangeUserInfo){
        const res = this.userService.changeUserInfo(+id, dto)
        return res
    }

    @Delete(":id")
    @HttpCode(200)
    async delUser(@Param("id") id: number){
        const res = this.userService.delUser(+id)
        return res
    }
}
