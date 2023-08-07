import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisignService } from './disign.service';
import { CreateDisignDto } from './dto/create-disign.dto';
import { UpdateDisignDto } from './dto/update-disign.dto';

@Controller('disign')
export class DisignController {
  constructor(private readonly disignService: DisignService) {}

  @Post()
  create(@Body() createDisignDto: CreateDisignDto) {
    console.log(createDisignDto)
    return this.disignService.create(createDisignDto);
  }

  @Get()
  findAll() {
    return this.disignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disignService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisignDto: UpdateDisignDto) {
    return this.disignService.update(+id, updateDisignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disignService.remove(+id);
  }
}
