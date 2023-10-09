import { IsString } from "class-validator";

export class addCourseAdditional {

    @IsString()
    name: string;
}