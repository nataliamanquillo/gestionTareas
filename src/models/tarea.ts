import { DataTypes } from "sequelize";
import database from "../database/connection";
import Usuario from "./usuario";
import Estado from "./estado";




const Tarea = database.define('tarea', {

    titulo: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    fecha_vencimiento: {
        type: DataTypes.DATE,
        allowNull: false,

    },

    id_estado: {
         type: DataTypes.INTEGER,
         allowNull: false,

     },

     id_usuario: {
         type: DataTypes.INTEGER,
         allowNull: false,
         
         

     },

},

);


export default Tarea;