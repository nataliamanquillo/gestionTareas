import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTareas, verTarea } from "../controllers/tareas";
import { crearUsuario } from "../controllers/usuario";
import { listarEstados } from "../controllers/estado";
import { auth } from "../middlewares/auth";
import { loginUsuario } from "../controllers/login";


const router = Router ();

router.get('/tareas', auth, listarTareas);
router.get('/tareas/:id', auth, verTarea);
router.post('/tareas', auth, crearTarea);
router.put('/tareas/:id', auth, actualizarTarea);
router.delete('/tareas/:id', auth, eliminarTarea);

router.post('/usuario', crearUsuario);

router.get('/estados', listarEstados);

router.post('/sesion',  loginUsuario);



export default router;