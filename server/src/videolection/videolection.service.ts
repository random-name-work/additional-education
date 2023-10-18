import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { addVideoLection } from './dto/add-video-lection.dto';
import { changeVideolectionInfo } from './dto/change-video-lection-info.dto';

@Injectable()
export class VideolectionService {
    constructor(private readonly databaseService: DatabaseService) { }

    async getVideolections() {
        const res = await this.databaseService.videolections.findMany()
        return res
    }

    async addVideolection(userId: number, facultyId: number, dto: addVideoLection) {
        try {
            const res = await this.databaseService.videolections.create({
                data: {
                    ...dto,
                    Author: {
                        connect: {
                            id: userId
                        }
                    },
                    faculty: {
                        connect: {
                            id: facultyId
                        }
                    },
                    VideolectionInfo: {
                        create: {}
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async deleteVideolection(id: number) {
        try {
            const res = await this.databaseService.videolections.delete({
                where: {
                    id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async getVideolectionInfos() {
        const res = await this.databaseService.videolectionInfo.findMany()
        return res
    }

    async changeVideolectionInfo(id: number, dto: changeVideolectionInfo) {
        try {
            const res = await this.databaseService.videolectionInfo.update({
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
}
