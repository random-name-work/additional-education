import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { ChangeUserData } from './dto/change-user-data.dto';
import { ChangeUserInfo } from './dto/change-user-info.dto';
import { FileInterceptor } from '@nestjs/platform-express';

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

    @Post("uploadProfileImage")
    @UseInterceptors(FileInterceptor('file'))
    uploadProfileImage(@UploadedFile() file){
        const res = this.userService.uploadProfileImage(file)
        return res
    }

    @Delete(":id")
    @HttpCode(200)
    async delUser(@Param("id") id: number){
        const res = this.userService.delUser(+id)
        return res
    }
}
