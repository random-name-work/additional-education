import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CourseService } from './course.service';
import { addCourse } from './dto/add-course.dto';
import { changeCourseInfo } from './dto/change-course-info.dto';
import { addAuthorInfo } from './dto/add-author-info.dto';
import { addSection } from './dto/add-section.dto';
import { addModule } from './dto/add-module.dto';
import { addVideoLection } from './dto/add-video-lection.dto';
import { addLectionBlock } from './dto/add-lection-block.dto';
import { addLection } from './dto/add-lection.dto';
import { addTest } from './dto/add-test.dto';
import { addTestQuestion } from './dto/add-test-question.dto';
import { addTestQuestionVariant } from './dto/add-test-question-variant.dto';
import { addExam } from './dto/add-exam.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseSerice: CourseService) { }

    @Get('courses')
    async getCourses() {
        const res = this.courseSerice.getCourse()
        return res
    }

    @Get('coursesInfo')
    async getCoursesInfo() {
        const res = this.courseSerice.getCourseInfo()
        return res
    }

    @Post('addCourse')
    @UsePipes(new ValidationPipe())
    async addCourse(@Body() dto: addCourse) {
        try {
            const res = this.courseSerice.addCourse(dto)
            return res
        } catch (error) {
            return error
        }
    }

    @Put('changeCourseInfo/:id')
    @UsePipes(new ValidationPipe())
    async changeCourseInfo(@Param('id') id: number, @Body() dto: changeCourseInfo) {
        const res = this.courseSerice.changeCourseInfo(+id, dto)
        return res
    }

    @Delete('deleteCourse/:id')
    async deleteCourse(@Param('id') id: number) {
        const res = this.courseSerice.deleteCourse(+id)
        return res
    }

    // AuthorInfo CRUD
    @Get('authorsInfo')
    async getAuthorsInfo() {
        const res = this.courseSerice.getAuthorInfo()
        return res
    }

    @Post('addAuthorInfo/:courseInfoId')
    @UsePipes(new ValidationPipe())
    async addAuthorInfo(@Param('moduleId') courseInfoId: number, @Body() dto: addAuthorInfo) {
        const res = this.courseSerice.addAuthorInfo(+courseInfoId, dto)
        return res
    }

    @Delete('deleteAuthorInfo/:id')
    async deleteAuthorInfo(@Param('id') id: number) {
        const res = this.courseSerice.deleteAuthorInfo(+id)
        return res
    }

    // Section CRUD
    @Get('section')
    async getSection() {
        const res = this.courseSerice.getSection()
        return res
    }

    @Post('addSection/:courseInfoId')
    @UsePipes(new ValidationPipe())
    async addSection(@Param('courseInfoId') courseInfoId: number, @Body() dto: addSection) {
        const res = this.courseSerice.addSection(+courseInfoId, dto)
        return res
    }

    @Delete('deleteSection/:id')
    async deleteSection(@Param('id') id: number) {
        const res = this.courseSerice.deleteSection(+id)
        return res
    }

    // Module CRUD
    @Get('module')
    async getModule() {
        const res = this.courseSerice.getModule()
        return res
    }

    @Post('addModule/:sectionId')
    @UsePipes(new ValidationPipe())
    async addModule(@Param('sectionId') sectionId: number, @Body() dto: addModule) {
        const res = this.courseSerice.addModule(+sectionId, dto)
        return res
    }

    @Delete('deleteModule/:id')
    async deleteModule(@Param('id') id: number) {
        const res = this.courseSerice.deleteModule(+id)
        return res
    }

    // videoLection CRUD
    @Get('videoLection')
    async getVideoLection() {
        const res = this.courseSerice.getVideoLection()
        return res
    }

    @Post('addVideoLection/:moduleId')
    @UsePipes(new ValidationPipe())
    async addVideoLection(@Param('moduleId') moduleId: number, @Body() dto: addVideoLection) {
        const res = this.courseSerice.addVideoLection(+moduleId, dto)
        return res
    }

    @Delete('deleteVideoLection/:id')
    async deleteVideoLection(@Param('id') id: number) {
        const res = this.courseSerice.deleteVideoLection(+id)
        return res
    }

    // lection CRUD
    @Get('lection')
    async getLection() {
        const res = this.courseSerice.getLection()
        return res
    }

    @Post('addLection/:moduleId')
    @UsePipes(new ValidationPipe())
    async addLection(@Param('moduleId') moduleId: number, @Body() dto: addLection) {
        const res = this.courseSerice.addLection(+moduleId, dto)
        return res
    }

    @Delete('deleteLection/:id')
    async deleteLection(@Param('id') id: number) {
        const res = this.courseSerice.deleteLection(+id)
        return res
    }

    @Get('lectionBlock')
    async getLectionBlock() {
        const res = this.courseSerice.getLectionBlock()
        return res
    }

    @Post('addLectionBlock/:lectionId')
    @UsePipes(new ValidationPipe())
    async addLectionBlock(@Param('lectionId') lectionId: number, @Body() dto: addLectionBlock) {
        const res = this.courseSerice.addLectionBlock(+lectionId, dto)
        return res
    }

    @Delete('deleteLectionBlock/:id')
    async deleteLectionBlock(@Param('id') id: number) {
        const res = this.courseSerice.deleteLectionBlock(+id)
        return res
    }

    // test CRUD
    @Get('test')
    async getTest() {
        const res = this.courseSerice.getTest()
        return res
    }

    @Post('addTest/:moduleId')
    @UsePipes(new ValidationPipe())
    async addTest(@Param('moduleId') moduleId: number, @Body() dto: addTest) {
        const res = this.courseSerice.addTest(+moduleId, dto)
        return res
    }

    @Delete('deleteTest/:id')
    async deleteTest(@Param('id') id: number) {
        const res = this.courseSerice.deleteTest(+id)
        return res
    }

    @Get('testQuestion')
    async getTestQuestion() {
        const res = this.courseSerice.getTestQuestion()
        return res
    }

    @Post('addTestQuestion/:testId')
    @UsePipes(new ValidationPipe())
    async addTestQuestion(@Param('testId') testId: number, @Body() dto: addTestQuestion) {
        const res = this.courseSerice.addTestQuestion(+testId, dto)
        return res
    }

    @Delete('deleteTestQuestion/:id')
    async deleteTestQuestion(@Param('id') id: number) {
        const res = this.courseSerice.deleteTestQuestion(+id)
        return res
    }

    @Get('testQuestionVariant')
    async getTestQuestionVariant() {
        const res = this.courseSerice.getTestQuestionVariant()
        return res
    }

    @Post('addTestQuestionVariant/:testQuestionId')
    @UsePipes(new ValidationPipe())
    async addTestQuestionVariant(@Param('testQuestionId') testQuestionId: number, @Body() dto: addTestQuestionVariant) {
        const res = this.courseSerice.addTestQuestionVariant(+testQuestionId, dto)
        return res
    }

    @Delete('deleteTestQuestionVariant/:id')
    async deleteTestQuestionVariant(@Param('id') id: number) {
        const res = this.courseSerice.deleteTestQuestionVariant(+id)
        return res
    }

    // exam CRUD
    @Get('exam')
    async getExam() {
        const res = this.courseSerice.getExam()
        return res
    }

    @Post('addExam/:moduleId')
    @UsePipes(new ValidationPipe())
    async addExam(@Param('moduleId') moduleId: number, @Body() dto: addExam) {
        const res = this.courseSerice.addExam(+moduleId, dto)
        return res
    }

    @Delete('deleteExam/:id')
    async deleteExam(@Param('id') id: number) {
        const res = this.courseSerice.deleteExam(+id)
        return res
    }
}
