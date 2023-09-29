import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserPhoneDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly databaseService: DatabaseService){}

    async getUsers(){
        return this.databaseService.user.findMany()
    }

    async getOneUser(id: number){
        return this.databaseService.user.findUnique({
            where: {
                id
            }
        })
    }

    async createUser(dto: CreateUserPhoneDto){
        return this.databaseService.user.create({
            data: dto
        })
    }
}
