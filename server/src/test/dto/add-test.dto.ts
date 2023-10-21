import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class addTest {
    @IsNumber()
    @ApiProperty()
    timeToPass: number

    @IsNumber()
    @ApiProperty()
    askAmount: number

    @IsString()
    @ApiProperty()
    authorName: string
}