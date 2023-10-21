import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class addModule {

    @IsNumber()
    @ApiProperty()
    hoursAmount: number

    @IsString()
    @ApiProperty()
    moduleName:  string
}