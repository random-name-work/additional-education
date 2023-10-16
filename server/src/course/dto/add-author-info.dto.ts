import { IsNumber, IsString } from "class-validator";

export class addAuthorInfo {

    @IsString()
    aboutAuthor:  string
}