"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const hashPassword = async (user) => {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    return user.password;
};
exports.hashPassword = hashPassword;
const comparePassword = async (loginPassword, encryptedPassword) => {
    return await bcrypt.compare(loginPassword, encryptedPassword);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=bcryp.js.map