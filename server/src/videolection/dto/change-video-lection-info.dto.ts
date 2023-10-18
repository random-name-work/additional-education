import { IsOptional, IsString } from "class-validator"

export class changeVideolectionInfo {
    @IsString()
    @IsOptional()
    videoLectionURL: string
    
    @IsString()
    @IsOptional()
    diplomForPass: string
    
    @IsString()
    @IsOptional()
    descriptionHeader: string
    
    @IsString()
    @IsOptional()
    description: string
    
}