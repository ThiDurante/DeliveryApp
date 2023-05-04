import { IsNotEmpty } from 'class-validator';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  id: number;
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  password: string;

  role: string;
}
