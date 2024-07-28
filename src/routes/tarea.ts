import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTareas, verTarea } from "../controllers/tareas";

const router = Router ();

router.get('/', listarTareas);
router.get('/:id', verTarea);
router.post('/', crearTarea);
router.put('/:id', actualizarTarea);
router.delete('/:id', eliminarTarea);

export default router;