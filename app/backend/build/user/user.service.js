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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./model/user.model");
const bcryp_1 = require("../utils/bcryp");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async insert(user) {
        const encryptedUserPass = await (0, bcryp_1.hashPassword)(user);
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
    findById(id) {
        return this.userModel.findOne({ where: { id } });
    }
    findByEmail(email) {
        return this.userModel.findOne({ where: { email } });
    }
    update(id, updateUserDto) {
        return this.userModel.update(updateUserDto, { where: { id } });
    }
    remove(id) {
        return this.userModel.destroy({ where: { id } });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map