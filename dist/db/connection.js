"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'nseguel', 'nicolas123456789', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3302
});
exports.default = db;
//# sourceMappingURL=connection.js.map