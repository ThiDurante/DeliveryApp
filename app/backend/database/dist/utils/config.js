"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    port: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET,
};
exports.default = config;
//# sourceMappingURL=config.js.map