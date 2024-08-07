import { DataTypes } from "sequelize";
import database from "../database/connection";




const Estado = database.define('estado', {

    tipo_estado: {
        type: DataTypes.STRING,
        allowNull: false,

    },
});


export default Estado;