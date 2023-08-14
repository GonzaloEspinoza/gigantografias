import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose"

@Schema()
export class User extends Document {
    @Prop()
    name:string;

    @Prop()
    apPaterno:string;

    @Prop()
    apMaterno:string;

    @Prop()
    ci:string;

    @Prop()
    password:string;

    @Prop()
    state:boolean;

    @Prop()
    dateCreated:Date;

    @Prop()
    address:string;

    @Prop()
    phone:string

    
}

export const UserSchema = SchemaFactory.createForClass( User )
