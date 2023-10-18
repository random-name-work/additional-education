import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { VideolectionService } from './videolection.service';
import { addVideoLection } from './dto/add-video-lection.dto';
import { changeVideolectionInfo } from './dto/change-video-lection-info.dto';

@Controller('videolection')
export class VideolectionController {
    constructor(private readonly videoLectionService: VideolectionService) { }

    @Get('videolections')
    async getComment() {
        const res = this.videoLectionService.getVideolections()
        return res
    }

    @Post('addVideolection/:userId/:facultyId')
    @UsePipes(new ValidationPipe())
    async addComment(@Param('userId') userId: number, @Param('facultyId') facultyId: number, @Body() dto: addVideoLection) {
        const res = this.videoLectionService.addVideolection(+userId, +facultyId, dto)
        return res
    }

    @Delete('deleteVideolection/:id')
    async deleteComment(@Param('id') id: number) {
        const res = this.videoLectionService.deleteVideolection(+id)
        return res
    }

    @Get('videolectionInfos')
    async getVideolectionInfos() {
        const res = this.videoLectionService.getVideolectionInfos()
        return res
    }

    @Put('changeVideolectionInfo/:id')
    async changeVideolectionInfo(@Param('id') id: number, @Body() dto: changeVideolectionInfo){
        const res = this.videoLectionService.changeVideolectionInfo(+id, dto)
        return res
    }
}
