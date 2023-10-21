import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class addEduTypes {

    @IsString()
    @ApiProperty()
    name: string;
}