import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare const hashPassword: (user: CreateUserDto) => Promise<string>;
export declare const comparePassword: (loginPassword: string, encryptedPassword: string) => Promise<any>;
