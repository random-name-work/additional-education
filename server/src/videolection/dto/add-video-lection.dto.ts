import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class addVideoLection {

    @IsString()
    @ApiProperty()
    lectionImg: string

    @IsString()
    @ApiProperty()
    lectionName: string
}