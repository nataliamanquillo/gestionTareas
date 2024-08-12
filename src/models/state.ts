import { DataTypes } from "sequelize";
import database from "../database/connection";

const States = database.define('states', {

  

    id_country: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },

});





export default States;
