import { IsString } from "class-validator"

export class addBlog {
    @IsString()
    blogImg: string

    @IsString()
    blogTitle: string
}