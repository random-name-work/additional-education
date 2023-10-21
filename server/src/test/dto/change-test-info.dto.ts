import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString } from "class-validator"

export class changeTestInfo {
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    testName: string

    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    testHeader: string

    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    testDescription: string

    @IsNumber()
    @IsOptional()
    @ApiProperty({required: false})
    pointsToPass: number

    @IsNumber()
    @IsOptional()
    @ApiProperty({required: false})
    timeToPass: number
    
}