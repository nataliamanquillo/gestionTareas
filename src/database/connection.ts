import { Sequelize } from "sequelize";
import Usuario from "../models/usuario";
import Tarea from "../models/tarea";
import Estado from "../models/estado";
import Country from "../models/country";

 const database = new Sequelize ('ryfq55d728nsmpm4', 'bb8pkkqim9zp3if8', 'pe0uborn7t6cc1s5', {
      host: 'tj5iv8piornf713y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      dialect: 'mysql',



 });
 
//  const database = new Sequelize ('gestiontareas', 'root', '', {
//      host: 'localhost',
//     dialect: 'mysql',



//  });


export default database;