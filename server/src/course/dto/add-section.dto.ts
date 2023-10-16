import { IsNumber, IsOptional } from "class-validator";

export class addSection {

    @IsNumber()
    hoursAmount: number

    @IsNumber()
    cost: number

    @IsNumber()
    @IsOptional()
    cashback?: number
}