import { Request, Response } from 'express';  



export const listarTareas = ( req: Request, res: Response) => {

     res.json({
         msg: 'Lista de tareas',
     });

 }
 export const verTarea = (req: Request, res: Response) => {

    const { id }=req.params;
    res.json({
        msg: 'Tarea',
        id
    });

}
export const crearTarea = (req: Request, res: Response) => {

    const { body }=req;
    res.json({
        msg: 'Crear',
        body
    });

}

//actualizar usuario
export const actualizarTarea = (req: Request, res: Response) => {

    const { id }=req.params;
    const { body }=req;
    res.json({
        msg: 'Actualizar',
        body,
        id
    });

}

export const eliminarTarea = (req: Request, res: Response) => {

    const { id }=req.params;
   
    res.json({
        msg: 'Eliminar',
       id
    });

}