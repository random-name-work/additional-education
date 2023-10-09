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
        const res = await this.databaseService.educationType.findMany()
        return res
    }

    async addEduTypes(dto: addEduTypes) {
        try {
            const res = await this.databaseService.educationType.create({
                data: {
                    ...dto
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async getFaculty() {
        const res = await this.databaseService.faculty.findMany()
        return res
    }

    async addFaculty(dto: addFaculty) {
        try {
            const res = await this.databaseService.faculty.create({
                data: {
                    ...dto
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async getDiplomType() {
        const res = await this.databaseService.diplomType.findMany()
        return res
    }

    async addDiplomType(dto: addDiplomType) {
        try {
            const res = await this.databaseService.diplomType.create({
                data: {
                    ...dto
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async getCourseAdditional() {
        const res = await this.databaseService.courseAdditional.findMany()
        return res
    }

    async addCourseAdditional(dto: addCourseAdditional) {
        try {
            const res = await this.databaseService.courseAdditional.create({
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
