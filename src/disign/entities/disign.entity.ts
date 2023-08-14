import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class Disign extends Document {

    @Prop()
    idUser:string;

    @Prop()
    name:string;

    @Prop()
    description:string;
    
    @Prop()
    size:number;

    @Prop()
    type:string;

    @Prop()
    formato:string;

    @Prop()
    dateCreated:Date;

    @Prop()
    dateModified:Date;

    @Prop()
    urlFile:string

    @Prop()
    state:boolean;  // true = impreso, false = falta imprimir
}

export const DisignSchema = SchemaFactory.createForClass( Disign )