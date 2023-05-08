import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    signIn(email: string, password: string): Promise<{
        user: import("../user/model/user.model").User;
        access_token: string;
    }>;
    register(user: CreateUserDto): Promise<{
        user: import("../user/model/user.model").User;
        access_token: string;
    }>;
}
