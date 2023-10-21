import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, Length } from "class-validator"

export class ChangeUserData {

    @IsOptional()
    @IsEmail()
    @ApiProperty({required: false})
    email: string;

    @IsOptional()
    @Length(11)
    @ApiProperty({required: false})
    phoneNum: string;

    @IsOptional()
    @IsString()
    @Length(6)
    @ApiProperty({required: false})
    password: string;

    @IsOptional()
    @ApiProperty({required: false})
    jwt: string;
}