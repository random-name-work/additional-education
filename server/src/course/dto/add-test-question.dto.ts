import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class addTestQuestion {
    
    @IsString()
    @ApiProperty()
    questionType: string
    
    @IsNumber()
    @ApiProperty()
    queueNumber: number
    
    @IsString()
    @ApiProperty()
    questionHeader: string
    
    @IsString()
    @ApiProperty()
    questionImg: string
}