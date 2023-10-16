import { IsNumber, IsString } from "class-validator";

export class addTest {
    @IsString()
    lessonName: string
    @IsNumber()
    queueNumber: number
    @IsString()
    descriptionHeader: string
    @IsString()
    descriptionContent: string
    @IsNumber()
    timeForPass: number
    @IsNumber()
    questionsAmount: number
    @IsNumber()
    maxPoints: number
    @IsNumber()
    pointForPass: number
    @IsString()
    homeworkName: string
    @IsString()
    homeworkDesription: string
    @IsString()
    homeworkFile: string
}