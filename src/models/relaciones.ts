import Usuario from "./usuario";
import Tarea from "./tarea";
import Estado from "./estado";

import Countries from "./country";
import States from "./state";

Usuario.hasMany(Tarea,{foreignKey: 'id_usuario',})

Tarea.belongsTo(Usuario)

Estado.hasMany(Tarea,{foreignKey: 'id_estado',})
Tarea.belongsTo(Estado)


Countries.hasMany(States,{foreignKey: 'id_country',})
States.belongsTo(Countries)
