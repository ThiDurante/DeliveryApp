"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcryp_1 = require("../utils/bcryp");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const checkPassword = await (0, bcryp_1.comparePassword)(password, user.dataValues.password);
        if (!checkPassword) {
            throw new common_1.UnauthorizedException('Invalid password');
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
    async register(user) {
        const checkUser = await this.usersService.findByEmail(user.email);
        if (checkUser) {
            throw new common_1.UnauthorizedException('User already exists');
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
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map