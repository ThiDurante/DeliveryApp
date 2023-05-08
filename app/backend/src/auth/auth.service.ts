import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/utils/bcryp';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const checkPassword = await comparePassword(
      password,
      user.dataValues.password,
    );
    if (!checkPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = {
      username: user.dataValues.email,
      sub: user.dataValues.id,
    };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: CreateUserDto) {
    const checkUser = await this.usersService.findByEmail(user.email);
    if (checkUser) {
      throw new UnauthorizedException('User already exists');
    }
    const newUser = await this.usersService.insert(user);
    const payload = {
      username: newUser.dataValues.email,
      sub: newUser.dataValues.id,
    };
    return {
      user: newUser,
      access_token: this.jwtService.sign(payload),
    };
  }
}
