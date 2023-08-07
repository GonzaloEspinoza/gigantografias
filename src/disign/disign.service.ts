import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDisignDto } from './dto/create-disign.dto';
import { UpdateDisignDto } from './dto/update-disign.dto';
import { Model } from 'mongoose';
import { Disign } from './entities/disign.entity';

@Injectable()
export class DisignService {

  constructor(
    @InjectModel(Disign.name) private designModel: Model<Disign>
  ){}

 async create(createDisignDto: CreateDisignDto) {
  console.log('ssssssssssssssss')
  console.log(createDisignDto)

    const design = await this.designModel.create(createDisignDto)
    
    console.log(design)
    return design
  }

  findAll() {
    return `This action returns all disign`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disign`;
  }

  update(id: number, updateDisignDto: UpdateDisignDto) {
    return `This action updates a #${id} disign`;
  }

  remove(id: number) {
    return `This action removes a #${id} disign`;
  }
}
