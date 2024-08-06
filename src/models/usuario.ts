import { DataTypes, Model, ModelCtor } from "sequelize";
import database from "../database/connection";
import bcrypt from "bcrypt";

const Usuario = database.define('Usuario', {

    nombre: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    correo: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,

    },


 

   

});





export default Usuario;

