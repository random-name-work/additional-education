import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class addExam {
    @IsString()
    @ApiProperty()
    lessonName: string
    
    @IsNumber()
    @ApiProperty()
    queueNumber: number
    
    @IsString()
    @ApiProperty()
    header: string
    
    @IsString()
    @ApiProperty()
    text: string
    
    @IsString()
    @ApiProperty()
    img: string
    
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