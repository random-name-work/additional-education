import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class createRole{

    @IsString()
    @ApiProperty()
    roleName: string
}