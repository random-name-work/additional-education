import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { addTest } from './dto/add-test.dto';
import { changeTestInfo } from './dto/change-test-info.dto';
import { addTestTask } from './dto/add-test-task.dto';
import { addTestTaskAnswerVariant } from './dto/add-test-task-answer-variant.dto';

@Injectable()
export class TestService {
    constructor(private readonly databaseService: DatabaseService) { }

    async getTests() {
        const res = await this.databaseService.tests.findMany()
        return res
    }

    async getPassedUsers() {
        const res = await this.databaseService.testsOnUser.findMany()
        return res
    }

    async addTest(userId: number, facultyId: number, dto: addTest) {
        try {
            const res = await this.databaseService.tests.create({
                data: {
                    ...dto,
                    author: {
                        connect: {
                            id: userId
                        }
                    },
                    faculty: {
                        connect: {
                            id: facultyId
                        }
                    },
                    testsInfo: {
                        create: {}
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async deleteTest(id: number) {
        try {
            const res = await this.databaseService.tests.delete({
                where: {
                    id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    // test info
    async getTestInfo(id: number) {
        const res = await this.databaseService.testsInfo.findFirst({
            where: {
                id
            }
        })
        return res
    }

    async changeTestInfo(id: number, dto: changeTestInfo) {
        try {
            const res = await this.databaseService.testsInfo.update({
                where: {
                    id
                },
                data: {
                    ...dto
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    // test task
    async getTestTask(id: number) {
        try {
            const res = await this.databaseService.testTasks.findMany({
                where: {
                    testInfoId: id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async addTestTask(testInfoId: number, dto: addTestTask) {
        try {
            const res = await this.databaseService.testTasks.create({
                data: {
                    ...dto,
                    testInfo: {
                        connect: {
                            id: testInfoId
                        }
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async deleteTestTask(id: number) {
        try {
            const res = await this.databaseService.testTasks.delete({
                where: {
                    id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    // test task answer variant
    async getTestTaskAnswerVariant(id: number) {
        try {
            const res = await this.databaseService.testTasksAnswerVariant.findMany({
                where: {
                    testTasksId: id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async addTestTaskAnswerVariant(testTaskId: number, dto: addTestTaskAnswerVariant) {
        try {
            const res = await this.databaseService.testTasksAnswerVariant.create({
                data: {
                    ...dto,
                    testTasks: {
                        connect: {
                            id: testTaskId
                        }
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async deleteTestTaskAnswerVariant(id: number) {
        try {
            const res = await this.databaseService.testTasksAnswerVariant.delete({
                where: {
                    id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }
}
