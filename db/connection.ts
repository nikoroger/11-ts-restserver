import { Sequelize } from "sequelize";

const db = new Sequelize('node', 'nseguel' , 'nicolas123456789', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3302    
});

export default db;