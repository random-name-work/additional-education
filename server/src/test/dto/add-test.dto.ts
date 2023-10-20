import { IsNumber, IsString } from "class-validator"

export class addTest {
    @IsNumber()
    timeToPass: number
    @IsNumber()
    askAmount: number
    @IsString()
    authorName: string
}