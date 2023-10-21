import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString } from "class-validator"

export class changeVideolectionInfo {
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    videoLectionURL: string
    
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    diplomForPass: string
    
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    descriptionHeader: string
    
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    description: string
    
}