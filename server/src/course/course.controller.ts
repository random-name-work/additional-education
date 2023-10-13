import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
}
