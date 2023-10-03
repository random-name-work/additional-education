import { IsEmail, IsString, Length } from "class-validator"

export class ChangeUserData {
    
    @IsEmail()
    email?: string;

    @Length(11)
    phoneNum?: string;

    @IsString()
    @Length(6)
    password?: string;

    jwt?: string
}