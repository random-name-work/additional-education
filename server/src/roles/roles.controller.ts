import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { createRole } from './dto/create-role.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('roles')
@ApiTags('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService){}

    @Get()
    @ApiResponse({ status: 200, description: 'Return roles'})
    async getAll(){
        const res = await this.rolesService.getRoles()
        return res
    }

    @Get("rolesOnUser")
    @ApiResponse({ status: 200, description: 'Return rolesOnUser'})
    async getRolesOnUser(){
        const res = await this.rolesService.getRolesOnUser()
        return res
    }
    
    @Post("create")
    @ApiResponse({ status: 200, description: 'Return role'})
    @HttpCode(201)
    async createRole(@Body() dto:createRole){
        const res = await this.rolesService.createRole(dto)
        return res
    }

    @Delete("/delRole/:id")
    @ApiResponse({ status: 200, description: 'Return role'})
    async delRole(@Param("id") id: number){
        const res = await this.rolesService.delRole(+id)
        return res
    }


}
