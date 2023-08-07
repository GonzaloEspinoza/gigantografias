import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class Disign extends Document {

    @Prop()
    name:string;

    @Prop()
    description:string;
    
    @Prop()
    size:string;

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
}

export const DisignSchema = SchemaFactory.createForClass( Disign )