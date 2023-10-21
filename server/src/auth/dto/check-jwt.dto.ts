import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CheckJwt {

    @IsString()
    @ApiProperty()
    jwt: string;
}