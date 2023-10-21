import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class addLection {
    @IsString()
    @ApiProperty()
    lessonName: string

    @IsNumber()
    @ApiProperty()
    queueNumber: number

    @IsString()
    @ApiProperty()
    homeworkName: string

    @IsString()
    @ApiProperty()
    homeworkDesription: string

    @IsString()
    @ApiProperty()
    homeworkFile: string

}