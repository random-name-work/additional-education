import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserPhoneDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async getAll(){
        const res = this.userService.getUsers()
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
    async createUser(@Body() dto: CreateUserPhoneDto){
        const res = this.userService.createUser(dto)
        return res
    }
}
