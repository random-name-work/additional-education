import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class addFaculty {

    @IsString()
    @ApiProperty()
    name: string;
}