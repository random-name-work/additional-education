import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class addLectionBlock {
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
    img: string
}