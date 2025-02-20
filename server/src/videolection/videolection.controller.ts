import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { VideolectionService } from './videolection.service';
import { addVideoLection } from './dto/add-video-lection.dto';
import { changeVideolectionInfo } from './dto/change-video-lection-info.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('videolection')
@ApiTags('videolection')
export class VideolectionController {
    constructor(private readonly videoLectionService: VideolectionService) { }

    @Get('videolections')
    @ApiResponse({ status: 200, description: 'Return videolections'})
    async getVideolections() {
        const res = this.videoLectionService.getVideolections()
        return res
    }

    @Post('addVideolection/:userId/:facultyId')
    @ApiResponse({ status: 200, description: 'Return videolection'})
    @UsePipes(new ValidationPipe())
    async addVideolection(@Param('userId') userId: number, @Param('facultyId') facultyId: number, @Body() dto: addVideoLection) {
        const res = this.videoLectionService.addVideolection(+userId, +facultyId, dto)
        return res
    }

    @Delete('deleteVideolection/:id')
    @ApiResponse({ status: 200, description: 'Return videolection'})
    async deleteVideolection(@Param('id') id: number) {
        const res = this.videoLectionService.deleteVideolection(+id)
        return res
    }

    @Get('videolectionInfos')
    @ApiResponse({ status: 200, description: 'Return videolectionInfos'})
    async getVideolectionInfos() {
        const res = this.videoLectionService.getVideolectionInfos()
        return res
    }

    @Put('changeVideolectionInfo/:id')
    @ApiResponse({ status: 200, description: 'Return videolectionInfo'})
    async changeVideolectionInfo(@Param('id') id: number, @Body() dto: changeVideolectionInfo){
        const res = this.videoLectionService.changeVideolectionInfo(+id, dto)
        return res
    }
}
