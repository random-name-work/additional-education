import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class addBlog {
    @IsString()
    @ApiProperty()
    blogImg: string

    @IsString()
    @ApiProperty()
    blogTitle: string
}