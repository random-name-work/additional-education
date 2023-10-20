import { IsBoolean, IsString } from "class-validator"

export class addTestTaskAnswerVariant {
    @IsBoolean()
    isRight: boolean
    
    @IsString()
    variantText: string
}