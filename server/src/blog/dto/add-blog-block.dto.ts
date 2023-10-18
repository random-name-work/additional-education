import { IsOptional, IsString } from "class-validator"

export class addBlogBlock {
    
    @IsString()
    @IsOptional()
    header: string
    
    @IsString()
    @IsOptional()
    text: string
    
    @IsString()
    @IsOptional()
    videoUrl: string
    
    @IsString()
    @IsOptional()
    audioUrl: string
    
    @IsString()
    @IsOptional()
    imgUrl: string
}