import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator"

export class LoginUserEmail {

    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @Length(6)
    @ApiProperty()
    password: string;
}