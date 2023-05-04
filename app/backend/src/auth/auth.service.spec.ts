import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/model/user.model';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/utils/bcryp';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ user: User; access_token: string }> {
    const user = await this.usersService.findByEmail(email);

    if (!user) throw new UnauthorizedException('Email not found');
    console.log(pass, user.password);
    const checkPassword = await comparePassword(pass, user.password);

    if (!checkPassword) {
      throw new UnauthorizedException('Invalid password');
    }
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }
}
