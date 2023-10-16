import { IsOptional, IsString } from "class-validator";

export class addLectionBlock {
    @IsString()
    @IsOptional()
    header: string

    @IsString()
    @IsOptional()
    text: string

    @IsString()
    @IsOptional()
    img: string
}