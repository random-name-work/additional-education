import { IsBoolean, IsNumber, IsString } from "class-validator";

export class addTestQuestionVariant {
    @IsNumber()
    queueNumber: number
    @IsString()
    variantText: string
    @IsBoolean()
    isTrue: boolean
}