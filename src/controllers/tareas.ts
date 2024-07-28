import { Request, Response } from 'express';
import Tarea from '../models/tarea';  



export const listarTareas = async ( req: Request, res: Response) => {

    const tareas = await Tarea.findAll();
    res.json( tareas );

 }
 export const verTarea = async(req: Request, res: Response) => {


    try {

        const tarea = await Tarea.findByPk(1);
        res.json( tarea );
    }
        catch (error) {

            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            })
  

}

    const { id }=req.params;
    res.json({
        msg: 'Tarea',
        id
    });

}
export const crearTarea = async (req: Request, res: Response) => {

    const { body }=req;


    try {

        const tarea = await Tarea.create(body)
        await tarea.save();
            res.json( tarea );
        
        }
        catch (error) {

            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            })
  

}
    }


export const actualizarTarea = async (req: Request, res: Response) => {

    const { id }=req.params;
    const { body }=req;

    try {

        const tarea = await Tarea.findByPk(id);
        if (!tarea){

            return res.status( 404 ).json({ 
                msg:'No existe un usuario con el id ' + id });
        }
        
        await tarea.update(body);

        res.json(tarea);
    }
        catch (error) {

            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            })
  

}
}

export const eliminarTarea = async (req: Request, res: Response) => {

    const { id }=req.params;


    const tarea = await Tarea.findByPk(id);
    if (!tarea){

        return res.status( 404 ).json({ 
            msg:'No existe un usuario con el id ' + id });
    }
    await tarea.destroy();

    res.json(
        { 
            msg:'Tarea eliminada' });
}
   