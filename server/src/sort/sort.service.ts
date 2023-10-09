import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { addEduTypes } from './dto/add-edu-types.dto';
import { addFaculty } from './dto/add-faculty.dto';
import { addDiplomType } from './dto/add-diplom-type.dto';
import { addCourseAdditional } from './dto/add-course-additional.dto';

@Injectable()
export class SortService {
    constructor(private readonly databaseService: DatabaseService) { }

    async getEduTypes() {
        const res = this.databaseService.educationType.findMany()
        return res
    }

    async addEduTypes(dto: addEduTypes) {
        const res = this.databaseService.educationType.create({
            data: {
                ...dto
            }
        })
        return res
    }

    async getFaculty() {
        const res = this.databaseService.faculty.findMany()
        return res
    }

    async addFaculty(dto: addFaculty) {
        const res = this.databaseService.faculty.create({
            data: {
                ...dto
            }
        })
        return res
    }

    async getDiplomType() {
        const res = this.databaseService.diplomType.findMany()
        return res
    }

    async addDiplomType(dto: addDiplomType) {
        const res = this.databaseService.diplomType.create({
            data: {
                ...dto
            }
        })
        return res
    }

    async getCourseAdditional() {
        const res = this.databaseService.courseAdditional.findMany()
        return res
    }

    async addCourseAdditional(dto: addCourseAdditional) {
        const res = this.databaseService.courseAdditional.create({
            data: {
                ...dto
            }
        })
        return res
    }
}
