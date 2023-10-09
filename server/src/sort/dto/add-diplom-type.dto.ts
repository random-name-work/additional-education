import { IsString } from "class-validator";

export class addDiplomType {

    @IsString()
    name: string;
}