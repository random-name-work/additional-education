import { IsNumber, IsString } from "class-validator";

export class addModule {

    @IsNumber()
    hoursAmount: number

    @IsString()
    moduleName:  string
}