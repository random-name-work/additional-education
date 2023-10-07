import { IsEmail, IsString, Length } from "class-validator"

export class CreateUserEmailDto {

    @IsEmail()
    email: string;

    @IsString()
    @Length(6)
    password: string;
}