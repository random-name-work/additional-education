import { IsNumber, IsString } from "class-validator";

export class addLection {
    @IsString()
    lessonName: string

    @IsNumber()
    queueNumber: number

    @IsString()
    homeworkName: string

    @IsString()
    homeworkDesription: string

    @IsString()
    homeworkFile: string

}