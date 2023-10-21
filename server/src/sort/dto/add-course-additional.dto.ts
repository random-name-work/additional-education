import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class addCourseAdditional {

    @IsString()
    @ApiProperty()
    name: string;
}