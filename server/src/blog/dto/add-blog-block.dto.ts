import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString } from "class-validator"

export class addBlogBlock {
    
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    header: string
    
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    text: string
    
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    videoUrl: string
    
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    audioUrl: string
    
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    imgUrl: string
}