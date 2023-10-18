import { IsNumber, IsString } from "class-validator"

export class addVideoLection {

    @IsString()
    lectionImg: string

    @IsString()
    lectionName: string
}