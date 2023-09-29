import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserPhoneDto } from './dto/create-user-phone.dto';
import { CreateUserEmailDto } from './dto/create-user-email.dto';

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

    async createUserPhone(dto: CreateUserPhoneDto){
        return this.databaseService.user.create({
            data: dto
        })
    }

    async createUserEmail(dto: CreateUserEmailDto){
        
        return this.databaseService.user.create({
            data: dto
        })
    }
}
