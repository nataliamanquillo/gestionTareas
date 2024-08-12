import { DataTypes } from "sequelize";
import database from "../database/connection";


const Cities = database.define('cities', {

  
    id_state: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
});


export default Cities;