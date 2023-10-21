import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class addTest {
    
    @IsString()
    @ApiProperty()
    lessonName: string
    
    @IsNumber()
    @ApiProperty()
    queueNumber: number
    
    @IsString()
    @ApiProperty()
    descriptionHeader: string
    
    @IsString()
    @ApiProperty()
    descriptionContent: string
    
    @IsNumber()
    @ApiProperty()
    timeForPass: number
    
    @IsNumber()
    @ApiProperty()
    questionsAmount: number
    
    @IsNumber()
    @ApiProperty()
    maxPoints: number
    
    @IsNumber()
    @ApiProperty()
    pointForPass: number
    
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