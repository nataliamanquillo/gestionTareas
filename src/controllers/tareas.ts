import { Request, Response } from 'express';
import Tarea from '../models/tarea';  



export const listarTareas = async ( req: Request, res: Response) => {

    const tareas = await Tarea.findAll();
    res.json( tareas );

 }
 export const verTarea = async(req: Request, res: Response) => {


    const { id }=req.params;

    try {

        const tarea = await Tarea.findByPk(id);
        res.json( tarea );

    }
        catch (error) {

            console.log(error);
            res.status(500).json({
                msg: 'Ocurrio un error para ver la tarea'
            })
  

}

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
                msg: 'No fue posible crear tarea'
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
                msg: 'No fue posible actualizar tarea'
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
   