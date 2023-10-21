import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class addMessage {

    @IsString()
    @ApiProperty()
    message: string

    @IsNumber()
    @ApiProperty()
    chatId: number

    @IsNumber()
    @ApiProperty()
    fromUserId: number
    
}