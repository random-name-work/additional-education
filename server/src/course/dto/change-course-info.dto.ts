import { IsNumber, IsOptional, IsString } from "class-validator";

export class changeCourseInfo {

    @IsString()
    authorName: string

    @IsNumber()
    @IsOptional()
    listenerAmount?: number

    @IsString()
    minMaxHours: string

    @IsString()
    courseGoal: string

    @IsString()
    educationForm: string

    @IsString()
    certificationType: string
}