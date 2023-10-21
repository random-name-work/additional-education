import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SortService } from './sort.service';
import { addEduTypes } from './dto/add-edu-types.dto';
import { addFaculty } from './dto/add-faculty.dto';
import { addDiplomType } from './dto/add-diplom-type.dto';
import { addCourseAdditional } from './dto/add-course-additional.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('sort')
@ApiTags('sort')
export class SortController {
    constructor(private readonly sortService: SortService) { }

    @Get('eduTypes')
    async getEduTypes(){
        const res = this.sortService.getEduTypes()
        return res
    }

    @Post('addEduTypes')
    @UsePipes(new ValidationPipe())
    async addEduTypes(@Body() dto: addEduTypes){
        try {
            const res = this.sortService.addEduTypes(dto)
            return res
        } catch (error) {
            return error
        }
    }

    @Get('faculty')
    async getFaculty(){
        const res = this.sortService.getFaculty()
        return res
    }

    @Post('addFaculty')
    @UsePipes(new ValidationPipe())
    async addFaculty(@Body() dto: addFaculty){
        try {
            const res = this.sortService.addFaculty(dto)
            return res
        } catch (error) {
            return error
        }
    }

    @Get('diplomType')
    async getDiplomType(){
        const res = this.sortService.getDiplomType()
        return res
    }

    @Post('addDiplomType')
    @UsePipes(new ValidationPipe())
    async addDiplomType(@Body() dto: addDiplomType){
        try {
            const res = this.sortService.addDiplomType(dto)
            return res
        } catch (error) {
            return error
        }
    }

    @Get('courseAdditional')
    async getCourseAdditional(){
        const res = this.sortService.getCourseAdditional()
        return res
    }

    @Post('addCourseAdditional')
    @UsePipes(new ValidationPipe())
    async addCourseAdditional(@Body() dto: addCourseAdditional){
        try {
            const res = this.sortService.addCourseAdditional(dto)
            return res
        } catch (error) {
            return error
        }
    }

    @Get('courseToAdditional')
    async getCourseToAdditional(){
        const res = this.sortService.getCourseToAdditional()
        return res
    }
}
