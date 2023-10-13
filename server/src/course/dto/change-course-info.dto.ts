import { IsNumber, IsString } from "class-validator";

export class changeCourseInfo {

    @IsString()
    authorName: string


    @IsNumber()
    moduleAmount: number

    @IsNumber()
    listenerAmount: number

    @IsString()
    minMaxHours: string

    @IsString()
    courseGoal: string

    @IsString()
    educationForm: string

    @IsString()
    certificationType: string
}