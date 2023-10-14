import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CourseService } from './course.service';
import { addCourse } from './dto/add-course.dto';
import { changeCourseInfo } from './dto/change-course-info.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseSerice: CourseService) { }

    @Get('courses')
    async getCourses(){
        const res = this.courseSerice.getCourse()
        return res
    }

    @Get('coursesInfo')
    async getCoursesInfo(){
        const res = this.courseSerice.getCourseInfo()
        return res
    }

    @Post('addCourse')
    @UsePipes(new ValidationPipe())
    async addCourse(@Body() dto: addCourse){
        try {
            const res = this.courseSerice.addCourse(dto)
            return res
        } catch (error) {
            return error
        }
    }

    @Put('changeCourseInfo/:id')
    @UsePipes(new ValidationPipe())
    async changeCourseInfo(@Param('id') id: number, @Body() dto:changeCourseInfo){
        const res = this.courseSerice.changeCourseInfo(+id, dto)
        return res
    }

    @Delete('deleteCourse/:id')
    async deleteCourse(@Param('id') id: number){
        const res = this.courseSerice.deleteCourse(+id)
        return res
    }
}
