import { IsString } from "class-validator"

export class addTestTask {
    @IsString()
    taskTitle: string
    
    @IsString()
    taskType: string
    
}