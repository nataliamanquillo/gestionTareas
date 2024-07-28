import { Router } from "express";
import { listarTareas } from "../controllers/tareas";

const router = Router ();

router.get('/', listarTareas);

export default router;