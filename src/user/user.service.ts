import { Get, Injectable, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { LoginDataDto } from './dto/data-login.dto';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const encyrptPassword = await bcrypt.hash(createUserDto.password,10)
    createUserDto.password = encyrptPassword;
    const existUser = await this.userModel.find({ci:createUserDto.ci})
    console.log(existUser)
    if(existUser.length!=0){
      return {
        statusCode:404,
        code:1,
        data:[],
        message:"el ci ya fue registrado"
      }
    }

    const user = await this.userModel.create(createUserDto)
    console.log(user);
    // return 'This action adds a new user';
    return user;
  }

  async login(dataLogin:LoginDataDto){
    const {ci,password} = dataLogin;
    console.log(ci, password)
    const user = await this.userModel.findOne({ci})

    if(!user){
      return {
        data:[],
        code:1,
        statusCode:401,
        message:"no fount user"
      }
    }

    const isMatch =await bcrypt.compare(password, user.password)
    console.log(isMatch)
    if(!isMatch){

      return {
        data:0,
        message:"error password"
      }
    }
    if(isMatch){
      return user;
    }
    // return user;
    // return 
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id:string) {

    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
