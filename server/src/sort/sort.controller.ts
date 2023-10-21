import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SortService } from './sort.service';
import { addEduTypes } from './dto/add-edu-types.dto';
import { addFaculty } from './dto/add-faculty.dto';
import { addDiplomType } from './dto/add-diplom-type.dto';
import { addCourseAdditional } from './dto/add-course-additional.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('sort')
@ApiTags('sort')
export class SortController {
    constructor(private readonly sortService: SortService) { }

    @Get('eduTypes')
    @ApiResponse({ status: 200, description: 'Return eduTypes'})
    async getEduTypes(){
        const res = this.sortService.getEduTypes()
        return res
    }

    @Post('addEduTypes')
    @ApiResponse({ status: 200, description: 'Return eduType'})
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
    @ApiResponse({ status: 200, description: 'Return facultys'})
    async getFaculty(){
        const res = this.sortService.getFaculty()
        return res
    }

    @Post('addFaculty')
    @ApiResponse({ status: 200, description: 'Return faculty'})
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
    @ApiResponse({ status: 200, description: 'Return diplomTypes'})
    async getDiplomType(){
        const res = this.sortService.getDiplomType()
        return res
    }

    @Post('addDiplomType')
    @ApiResponse({ status: 200, description: 'Return diplomType'})
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
    @ApiResponse({ status: 200, description: 'Return courseAdditionals'})
    async getCourseAdditional(){
        const res = this.sortService.getCourseAdditional()
        return res
    }

    @Post('addCourseAdditional')
    @ApiResponse({ status: 200, description: 'Return courseAdditional'})
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
    @ApiResponse({ status: 200, description: 'Return courseToAdditional'})
    async getCourseToAdditional(){
        const res = this.sortService.getCourseToAdditional()
        return res
    }
}
