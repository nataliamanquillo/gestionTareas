import { Sequelize } from "sequelize";

const database = new Sequelize ('gestiontareas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',


});

export default database;