import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { ChangeUserData } from './dto/change-user-data.dto';
import { ChangeUserInfo } from './dto/change-user-info.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    @ApiResponse({ status: 200, description: 'Return users'})
    async getAll(){
        const res = this.userService.getUsers()
        return res
    }

    @Get("info")
    @ApiResponse({ status: 200, description: 'Return userInfos'})
    async getAllInfos(){
        const res = this.userService.getUsersInfos()
        return res
    }

    @Get("info/:id")
    @ApiResponse({ status: 200, description: 'Return one user info'})
    async getOneInfos(@Param("id") id: number){
        // +id because id: string, idk why
        const res = this.userService.getOneUsersInfos(+id)
        return res
    }

    @Get("userImgAndName/:id")
    @ApiResponse({ status: 200, description: 'Return one user img'})
    async getOneUsersImgAndName(@Param("id") id: number){
        // +id because id: string, idk why
        const res = this.userService.getOneUsersImgAndName(+id)
        return res
    }

    @Get(":id")
    @ApiResponse({ status: 200, description: 'Return one user'})
    async getOne(@Param("id") id: number){
        // +id because id: string, idk why
        const res = this.userService.getOneUser(+id)
        return res
    }

    @UsePipes(new ValidationPipe())
    @Put("changeUserData/:id")
    @ApiResponse({ status: 200, description: 'Return user'})
    @HttpCode(201)
    async ChangeUserData(@Param("id") id: number, @Body() dto: ChangeUserData){
        const res = this.userService.changeUserData(+id, dto)
        return res
    }

    @UsePipes(new ValidationPipe())
    @Put("changeUserInfo/:id")
    @ApiResponse({ status: 200, description: 'Return userInfo'})
    @HttpCode(201)
    async ChangeUserInfo(@Param("id") id: number, @Body() dto: ChangeUserInfo){
        const res = this.userService.changeUserInfo(+id, dto)
        return res
    }

    @Put("uploadProfileImage")
    @ApiResponse({ status: 200, description: 'Return userInfo'})
    @UseInterceptors(FileInterceptor('file'))
    uploadProfileImage(@Body() upload: any, @UploadedFile() file: Express.Multer.File){
        const id = +upload.id
        const res = this.userService.uploadProfileImage(id, file)
        return res
    }

    @Delete(":id")
    @ApiResponse({ status: 200, description: 'Return deleted user'})
    @HttpCode(200)
    async delUser(@Param("id") id: number){
        const res = this.userService.delUser(+id)
        return res
    }
}
