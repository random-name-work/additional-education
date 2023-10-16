import { IsNumber, IsString } from "class-validator";

export class addVideoLection {

    @IsNumber()
    queueNumber: number

    @IsString()
    lessonName: string

    @IsString()
    videoUrl: string

    @IsString()
    descriptionHeader: string

    @IsString()
    descriptionContent: string

    @IsString()
    homeworkName: string

    @IsString()
    homeworkDesription: string

    @IsString()
    homeworkFile: string
}