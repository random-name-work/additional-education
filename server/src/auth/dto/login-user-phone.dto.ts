import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator"

export class LoginUserPhone {

    @Length(11)
    @ApiProperty()
    phoneNum: string;

    @IsString()
    @Length(6)
    @ApiProperty()
    password: string;
}