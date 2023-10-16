import { IsNumber, IsString } from "class-validator";

export class addExam {
    @IsString()
    lessonName: string
    @IsNumber()
    queueNumber: number
    @IsString()
    header: string
    @IsString()
    text: string
    @IsString()
    img: string
    @IsString()
    homeworkName: string
    @IsString()
    homeworkDesription: string
    @IsString()
    homeworkFile: string
}