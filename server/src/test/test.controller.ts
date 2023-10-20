import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TestService } from './test.service';
import { addTest } from './dto/add-test.dto';
import { changeTestInfo } from './dto/change-test-info.dto';
import { addTestTask } from './dto/add-test-task.dto';
import { addTestTaskAnswerVariant } from './dto/add-test-task-answer-variant.dto';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) { }

    @Get('tests')
    async getTests() {
        const res = this.testService.getTests()
        return res
    }

    @Get('passedUsers')
    async getPassedUsers() {
        const res = this.testService.getPassedUsers()
        return res
    }

    @Post('addTest/:userId/:facultyId')
    @UsePipes(new ValidationPipe())
    async addTest(@Param('userId') userId: number, @Param('facultyId') facultyId: number, @Body() dto: addTest) {
        const res = this.testService.addTest(+userId, +facultyId, dto)
        return res
    }

    @Delete('deleteTest/:id')
    async deleteTest(@Param('id') id: number) {
        const res = this.testService.deleteTest(+id)
        return res
    }

    //test info
    @Get('testInfo/:id')
    async getTestInfos(@Param('id') id: number) {
        const res = this.testService.getTestInfo(+id)
        return res
    }

    @Put('changeTestInfo/:id')
    async changeTestInfo(@Param('id') id: number, @Body() dto: changeTestInfo) {
        const res = this.testService.changeTestInfo(+id, dto)
        return res
    }

    //test task
    @Get('testTask/:infoId')
    async getTestTask(@Param('infoId') infoId: number) {
        const res = this.testService.getTestTask(+infoId)
        return res
    }

    @Post('addTestTask/:testInfoId')
    @UsePipes(new ValidationPipe())
    async addTestTask(@Param('testInfoId') testInfoId: number, @Body() dto: addTestTask) {
        const res = this.testService.addTestTask(+testInfoId, dto)
        return res
    }

    @Delete('deleteTestTask/:id')
    async deleteTestTask(@Param('id') id: number) {
        const res = this.testService.deleteTestTask(+id)
        return res
    }

    //test task answer variant
    @Get('testTaskAnswerVariant/:testTaskId')
    async getTestTaskAnswerVariant(@Param('testTaskId') testTaskId: number) {
        const res = this.testService.getTestTaskAnswerVariant(+testTaskId)
        return res
    }

    @Post('addTestTaskAnswerVariant/:testTaskId')
    @UsePipes(new ValidationPipe())
    async addTestTaskAnswerVariant(@Param('testTaskId') testTaskId: number, @Body() dto: addTestTaskAnswerVariant) {
        const res = this.testService.addTestTaskAnswerVariant(+testTaskId, dto)
        return res
    }

    @Delete('deleteTestTaskAnswerVariant/:id')
    async deleteTestTaskAnswerVariant(@Param('id') id: number) {
        const res = this.testService.deleteTestTaskAnswerVariant(+id)
        return res
    }
}
