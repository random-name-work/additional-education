import { IsNumber, IsOptional, IsString } from "class-validator"

export class changeTestInfo {
    @IsString()
    @IsOptional()
    testName: string

    @IsString()
    @IsOptional()
    testHeader: string

    @IsString()
    @IsOptional()
    testDescription: string

    @IsNumber()
    @IsOptional()
    pointsToPass: number

    @IsNumber()
    @IsOptional()
    timeToPass: number
    
}