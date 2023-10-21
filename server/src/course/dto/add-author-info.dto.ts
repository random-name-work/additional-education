import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class addAuthorInfo {

    @IsString()
    @ApiProperty()
    aboutAuthor:  string
}