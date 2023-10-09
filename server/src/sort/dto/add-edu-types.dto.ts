import { IsString } from "class-validator";

export class addEduTypes {

    @IsString()
    name: string;
}