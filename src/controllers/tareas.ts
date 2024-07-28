import { Request, Response } from 'express';  



export const listarTareas = ( req: Request, res: Response) => {

     res.json({
         msg: 'Lista de tareas',
     });

 }