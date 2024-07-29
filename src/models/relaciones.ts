import Usuario from "./usuario";
import Tarea from "./tarea";
import Estado from "./estado";

Usuario.hasMany(Tarea,{foreignKey: 'id_usuario',})

Tarea.belongsTo(Usuario)

Estado.hasMany(Tarea,{foreignKey: 'id_estado',})
Tarea.belongsTo(Estado)