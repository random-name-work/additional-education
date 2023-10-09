import { IsNumber, IsString } from "class-validator"

export class addMessage {

    @IsString()
    message: string

    @IsNumber()
    chatId: number

    @IsNumber()
    fromUserId: number
    
}