import { Sequelize } from "sequelize";
import Usuario from "../models/usuario";
import Tarea from "../models/tarea";
import Estado from "../models/estado";

const database = new Sequelize ('gestiontareas', 'root', '', {
    host: 'mysql',
    dialect: 'mysql',



});



export default database;