import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class changeCourseInfo {

    @IsString()
    @ApiProperty()
    authorName: string

    @IsNumber()
    @IsOptional()
    @ApiProperty({required: false})
    listenerAmount?: number

    @IsString()
    @ApiProperty()
    minMaxHours: string

    @IsString()
    @ApiProperty()
    courseGoal: string

    @IsString()
    @ApiProperty()
    educationForm: string

    @IsString()
    @ApiProperty()
    certificationType: string
}