import { IsInt, IsString } from "class-validator"

export class CreateUserPhoneDto {

    @IsString()
    phoneNum: string;

    @IsString()
    password: string;
}