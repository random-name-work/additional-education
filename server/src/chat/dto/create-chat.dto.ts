import { ApiProperty } from "@nestjs/swagger"
import { IsNumber } from "class-validator"

export class createChat {

    @IsNumber()
    @ApiProperty()
    id1: number
    
    @IsNumber()
    @ApiProperty()
    id2: number
}