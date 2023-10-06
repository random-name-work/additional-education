import { IsEmail, IsOptional, IsString, Length } from "class-validator"

export class LoginUserEmail {

    @IsEmail()
    email: string;

    @IsString()
    @Length(6)
    password: string;

    @IsOptional()
    jwt: string;
}