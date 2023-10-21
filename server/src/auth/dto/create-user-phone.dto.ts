import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Length } from "class-validator"

export class CreateUserPhoneDto {

    @IsString()
    @ApiProperty()
    phoneNum: string;

    @IsString()
    @Length(6)
    @ApiProperty()
    password: string;
}