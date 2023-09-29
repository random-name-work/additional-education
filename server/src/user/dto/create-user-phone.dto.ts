import { IsInt, IsString, Length } from "class-validator"

export class CreateUserPhoneDto {

    @IsString()
    phoneNum: string;

    @IsString()
    @Length(6)
    password: string;
}