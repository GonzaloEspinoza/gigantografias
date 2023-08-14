import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseEnumPipe } from '@nestjs/common';
import { DisignService } from './disign.service';
import { CreateDisignDto } from './dto/create-disign.dto';
import { UpdateDisignDto } from './dto/update-disign.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('disign')
export class DisignController {
  constructor(private readonly disignService: DisignService) {}

  @Post()
  create(@Body() createDisignDto: CreateDisignDto) {
    console.log(createDisignDto)
    return 'route disabled'
    // return this.disignService.create(createDisignDto);
  }
  
  //upload file save, image, tiff
  @Post('file/:iduser')
  @UseInterceptors(FileInterceptor('file',{
    storage : diskStorage({
      destination : './public',
      filename : function(req, file, cb){
        cb(null, Date.now()+'_'+file.originalname)
      }
    })
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Param('iduser') idUser:string){
   console.log(file.originalname.split('.'))

   if(!idUser){
      return {
        data:[],
        code:1,
        statusCode:404,
        message:"El idUser is required"
      }
   }
  
   console.log(idUser)
   
    console.log(file);
    const fileUpload:CreateDisignDto = {
      idUser:idUser,
      name:file.originalname,
      formato:file.mimetype,
      description:file.destination,
      dateCreated:new Date,
      dateModified:new Date,
      size:file.size,
      urlFile:file.path,
      state:false,
      type:"impresion"
    };

   return this.disignService.create(fileUpload)
  }


  @Get('idUser=:idUser')
  findAll(@Param('idUser') idUser:string) {
    return this.disignService.findAll(idUser);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id)
    // return id
    return this.disignService.findOne(id);
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
