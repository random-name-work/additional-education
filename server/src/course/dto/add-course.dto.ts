import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class addCourse {

    @IsNumber()
    @ApiProperty()
    authorId: number;

    @IsString()
    @ApiProperty()
    courseName: string;

    @IsNumber()
    @ApiProperty()
    educationTypeId: number;

    @IsNumber()
    @ApiProperty()
    facultyId: number;

    @IsNumber()
    @ApiProperty()
    diplomTypeId: number;

    @IsString()
    @ApiProperty()
    diplomImg: string;

    @IsNumber()
    @ApiProperty()
    coursesToAdditionalId: number;

    @IsNumber()
    @ApiProperty()
    minHours: number;
}