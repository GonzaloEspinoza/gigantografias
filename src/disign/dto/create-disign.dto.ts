import { Prop } from "@nestjs/mongoose";
import { IsString, IsDate, IsNotEmpty } from "class-validator";

export class CreateDisignDto {

    @IsNotEmpty()
    idUser:string

    @IsString()
    // @Prop({enum:[]})
    name:string;

    @IsString()
    description:string;

    @IsString()
    size:number;

    @IsString()
    type:string;

    @IsString()
    formato:string;

    @IsNotEmpty()
    dateCreated:Date;

    @IsNotEmpty()
    dateModified:Date;

    @IsNotEmpty()
    urlFile:string;

    @IsNotEmpty()
    state:boolean;
}
