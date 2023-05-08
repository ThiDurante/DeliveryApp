import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./model/user.model").User>;
    findAll(): Promise<import("./model/user.model").User[]>;
    findOne(id: string): Promise<import("./model/user.model").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
