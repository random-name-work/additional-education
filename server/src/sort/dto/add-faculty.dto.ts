import { IsString } from "class-validator";

export class addFaculty {

    @IsString()
    name: string;
}