import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTareas, verTarea } from "../controllers/tareas";
import { crearUsuario } from "../controllers/usuario";
import { listarEstados } from "../controllers/estado";


const router = Router ();

router.get('/tareas', listarTareas);
router.get('/tareas/:id', verTarea);
router.post('/tareas', crearTarea);
router.put('/tareas/:id', actualizarTarea);
router.delete('/tareas/:id', eliminarTarea);

router.post('/usuario', crearUsuario);

router.get('/estados', listarEstados);

export default router;