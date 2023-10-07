import { IsEmail, IsString, Length } from "class-validator"

export class LoginUserEmail {

    @IsEmail()
    email: string;

    @IsString()
    @Length(6)
    password: string;
}