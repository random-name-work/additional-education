import { IsString, Length } from "class-validator"

export class LoginUserPhone {

    @Length(11)
    phoneNum: string;

    @IsString()
    @Length(6)
    password: string;
}