import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDisignDto } from './dto/create-disign.dto';
import { UpdateDisignDto } from './dto/update-disign.dto';
import { Disign } from './entities/disign.entity';
import { Model } from 'mongoose';

@Injectable()
export class DisignService {

  constructor(
    @InjectModel(Disign.name) private readonly designModel: Model<Disign>
  ){}

 async create(createDisignDto: CreateDisignDto) {
  console.log(createDisignDto)

    const design = await this.designModel.create(createDisignDto)
    
    console.log(design)
    return design
  }


  async findAll(idUser:string) {
    const listDesign = await this.designModel.find({idUser:idUser});

    // console.log(listDesign)

    return {
      code:0,
      statusCode:200,
      message:'list all design',
      data:listDesign
    };
  }

  async findOne(id: string) {
    const disignObject:Disign = await this.designModel.findById({_id:id})
    console.log(disignObject)
    return disignObject  
  }

  update(id: number, updateDisignDto: UpdateDisignDto) {
    return `This action updates a #${id} disign`;
  }

  remove(id: number) {
    return `This action removes a #${id} disign`;
  }
}
