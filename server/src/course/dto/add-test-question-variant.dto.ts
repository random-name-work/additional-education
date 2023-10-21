import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class addTestQuestionVariant {
    
    @IsNumber()
    @ApiProperty()
    queueNumber: number
    
    @IsString()
    @ApiProperty()
    variantText: string
    
    @IsBoolean()
    @ApiProperty()
    isTrue: boolean
}