import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class addVideoLection {

    @IsNumber()
    @ApiProperty()
    queueNumber: number

    @IsString()
    @ApiProperty()
    lessonName: string

    @IsString()
    @ApiProperty()
    videoUrl: string

    @IsString()
    @ApiProperty()
    descriptionHeader: string

    @IsString()
    @ApiProperty()
    descriptionContent: string

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