import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(4)
    name:string;

    @IsNotEmpty()
    apPaterno:string;

    @IsNotEmpty()
    apMaterno:string;

    @IsNotEmpty()
    ci:string;

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    state:boolean;

    @IsNotEmpty()
    dateCreated:Date;

    @IsNotEmpty()
    address:string;

    @IsNotEmpty()
    phone:string
}
