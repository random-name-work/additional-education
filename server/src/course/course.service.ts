import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { addCourse } from './dto/add-course.dto';
import { changeCourseInfo } from './dto/change-course-info.dto';

@Injectable()
export class CourseService {
    constructor(private readonly databaseService: DatabaseService) { }

    async getCourse() {
        const res = await this.databaseService.courses.findMany()
        return res
    }

    async getCourseInfo() {
        const res = await this.databaseService.courseInfo.findMany()
        return res
    }

    async addCourse(dto: addCourse) {
        try {
            const res = await this.databaseService.courses.create({
                data: {
                    author:{connect:{id: dto.authorId}},
                    courseName: dto.courseName,
                    educationType:{connect:{id: dto.educationTypeId}},
                    faculty:{connect:{id: dto.facultyId}},
                    diplomType:{connect:{id: dto.diplomTypeId}},
                    diplomImg: dto.diplomImg,
                    courseToAdditional:{
                        create:{
                            courseAdditional:{
                                connect:{
                                    id: dto.coursesToAdditionalId
                                }
                            }
                        }
                    },
                    minHours: dto.minHours,
                    courseInfo: {create: {}}
                }
            })
            return res
        } catch (error) {
            return error
        }
    }


}
