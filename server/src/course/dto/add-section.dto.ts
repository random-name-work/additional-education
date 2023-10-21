import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class addSection {

    @IsNumber()
    @ApiProperty()
    hoursAmount: number

    @IsNumber()
    @ApiProperty()
    cost: number

    @IsNumber()
    @IsOptional()
    @ApiProperty({required: false})
    cashback?: number
}