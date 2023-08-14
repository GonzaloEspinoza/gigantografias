import { IsNotEmpty, MinLength } from "class-validator";

export class LoginDataDto {
    
    @IsNotEmpty()
    @MinLength(7)
    ci:string;

    @IsNotEmpty()
    password:string
}