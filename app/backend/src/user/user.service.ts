import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { hashPassword } from 'src/utils/bcryp';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  async insert(user: CreateUserDto) {
    console.log(user);
    const encryptedUserPass = await hashPassword(user);

    return this.userModel.create({
      email: user.email,
      password: encryptedUserPass,
      name: user.name,
      role: user.role,
    });
  }

  findAll() {
    return this.userModel.findAll();
  }

  findById(id: number) {
    return this.userModel.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
