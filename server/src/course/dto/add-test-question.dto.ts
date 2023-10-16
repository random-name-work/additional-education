import { IsNumber, IsString } from "class-validator";

export class addTestQuestion {
    @IsString()
    questionType: string
    @IsNumber()
    queueNumber: number
    @IsString()
    questionHeader: string
    @IsString()
    questionImg: string
}