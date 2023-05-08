import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export const hashPassword = async (user: CreateUserDto) => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
  return user.password;
};

export const comparePassword = async (
  loginPassword: string,
  encryptedPassword: string,
) => {
  return await bcrypt.compare(loginPassword, encryptedPassword);
};
