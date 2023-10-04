import { IsEmail, IsOptional, IsString, Length } from "class-validator"

export class ChangeUserData {

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @Length(11)
    phoneNum: string;

    @IsOptional()
    @IsString()
    @Length(6)
    password: string;

    @IsOptional()
    jwt: string;
}