import { DataTypes } from "sequelize";
import database from "../database/connection";


const Countries = database.define('countries', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
});


export default Countries;