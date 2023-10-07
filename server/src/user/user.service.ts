import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeUserData } from './dto/change-user-data.dto';
import { ChangeUserInfo } from './dto/change-user-info.dto';
import { JwtService }  from 'src/jwt/jwt.service';
import { FilesService } from 'src/files/files.service';
@Injectable()
export class UserService {
    constructor(private readonly databaseService: DatabaseService, 
                private readonly jwtService: JwtService,
                private readonly filesService: FilesService) { }
    async getUsers() {
        return await this.databaseService.user.findMany()
    }

    async getUsersInfos() {
        return await this.databaseService.userInfo.findMany()
    }

    async getOneUser(id: number) {
        return await this.databaseService.user.findUnique({
            where: {
                id
            }
        })
    }

    async changeUserData(id: number, dto: ChangeUserData) {
        try {
            const res = await this.databaseService.user.update({
                where: {
                    id
                },
                data: {
                    ...dto
                }
            })
            return res
        } catch (error) {
            return error
        }


    }

    async changeUserInfo(id: number, dto: ChangeUserInfo) {
        try {
            const res = await this.databaseService.userInfo.update({
                where: {
                    userId: id
                },
                data: {
                    ...dto
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async uploadProfileImage(file: Express.Multer.File){
        const fileName = await this.filesService.createImageFile(file)
        return fileName
    }

    async delUser(id: number) {
        try {
            const res = await this.databaseService.user.delete({
                where: {
                    id,
                }
            })

            return res

        } catch (error) {
            return error
        }
    }
}
