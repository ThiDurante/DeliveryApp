import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
interface SignInDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        user: import("../user/model/user.model").User;
        access_token: string;
    }>;
    register(user: CreateUserDto): Promise<{
        user: import("../user/model/user.model").User;
        access_token: string;
    }>;
}
export {};
