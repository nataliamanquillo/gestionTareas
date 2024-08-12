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

    direccion: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    id_country: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    id_state: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    id_city: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

  

    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    lat: {
        type: DataTypes.DOUBLE,
        allowNull: false,

    },

    lng: {
        type: DataTypes.DOUBLE,
        allowNull: false,

    },



 

   

});





export default Usuario;

