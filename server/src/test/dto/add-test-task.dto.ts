import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class addTestTask {
    @IsString()
    @ApiProperty()
    taskTitle: string
    
    @IsString()
    @ApiProperty()
    taskType: string
    
}