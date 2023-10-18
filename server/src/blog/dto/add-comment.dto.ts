import { IsString } from "class-validator";

export class addComment {
    
    @IsString()
    commentText: string
}