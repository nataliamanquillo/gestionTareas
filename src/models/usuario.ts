import { DataTypes, Model, ModelCtor } from "sequelize";
import database from "../database/connection";

const Usuario = database.define('usuario', {

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

