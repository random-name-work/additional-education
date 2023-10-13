import { IsNumber, IsString } from "class-validator";

export class addCourse {

    @IsNumber()
    authorId: number;

    @IsString()
    courseName: string;

    @IsNumber()
    educationTypeId: number;

    @IsNumber()
    facultyId: number;

    @IsNumber()
    diplomTypeId: number;

    @IsString()
    diplomImg: string;

    @IsNumber()
    coursesToAdditionalId: number;

    @IsNumber()
    minHours: number;
}