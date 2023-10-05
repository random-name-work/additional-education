import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { createRole } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService){}

    @Get()
    async getAll(){
        const res = await this.rolesService.getRoles()
        return res
    }

    @Post("create")
    @HttpCode(201)
    async createRole(@Body() dto:createRole){
        const res = await this.rolesService.createRole(dto)
        return res
    }

    @Delete("/delRole/:id")
    async delRole(@Param("id") id: number){
        const res = await this.rolesService.delRole(+id)
        return res
    }
}
