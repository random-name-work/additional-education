import { Optional } from "@nestjs/common";
import { IsEmail, IsOptional, IsString, Length } from "class-validator"

export class ChangeUserData {

    @IsOptional()
    @IsEmail()
    email?: string | null;

    @IsOptional()
    @Length(11)
    phoneNum?: string | null;

    @IsOptional()
    @IsString()
    @Length(6)
    password?: string | null;

    @IsOptional()
    jwt?: string | null
}