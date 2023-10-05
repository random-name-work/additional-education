import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { createRole } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    constructor(private readonly databaseService: DatabaseService){}

    async getRoles(){
        const res = await this.databaseService.roles.findMany()
        return res
    }

    async getRolesOnUser(){
        const res = await this.databaseService.rolesOnUser.findMany()
        return res
    }

    async createRole(dto: createRole){
        try {
            const res = await this.databaseService.roles.create({
                data: {
                    ...dto
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async delRole(id:number){
        try {
            const res = await this.databaseService.roles.delete({
                where:{
                    id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }
}
