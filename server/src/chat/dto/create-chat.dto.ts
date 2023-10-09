import { IsNumber } from "class-validator"

export class createChat {

    @IsNumber()
    id1: number
    
    @IsNumber()
    id2: number
}