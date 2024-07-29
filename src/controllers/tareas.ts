import { Request, Response } from 'express';
import Tarea from '../models/tarea';  

import jwt from "jsonwebtoken";
import { auth } from '../middlewares/auth';


export const listarTareas = async ( req: Request, res: Response) => {

    const authorization = req.get("Authorization");

    const id_jwt = obtenerIdJwt(authorization);


    const tareas = await Tarea.findAll(
     {
        where: {
            id_usuario: id_jwt,
          }
     }   
    );
    res.json( tareas );

 }
 export const verTarea = async(req: Request, res: Response) => {
    const authorization = req.get("Authorization");
    const id_jwt = obtenerIdJwt(authorization);


    const { id }=req.params;


    try{

        const tarea = await Tarea.findByPk(id);
        const jsonTarea= JSON.parse( JSON.stringify(tarea));
    
        if (!tarea){
    
            return res.status( 404 ).json({ 
                msg:'No existe una tarea con el id ' + id });
        }
    
        else{
            if(jsonTarea.id_usuario !== id_jwt){
                return res.status( 404 ).json({
                    msg:'No tienes autorización para ver esta tarea ' });
            }else{
    
                    await tarea.save();
                   
                    res.json(tarea);
                }
            
        }
    }
        catch (error) {

            console.log(error);
            res.status(500).json({
                msg: 'No fue posible crear tarea'
            })
    }
 }




export const crearTarea = async (req: Request, res: Response) => {

    const authorization = req.get("Authorization");

    const id_jwt = obtenerIdJwt(authorization);

    const { body }=req;


    try {


        const tarea = await Tarea.create(body);
        const jsonTarea= JSON.parse( JSON.stringify(tarea));

        if(jsonTarea.id_usuario !== id_jwt){
            return res.status( 404 ).json({
                msg:'No tienes autorización para crear esta tarea 1' });
        }
        else{

            if(req.body.id_usuario !== id_jwt){
                return res.status( 404 ).json({
                    msg:'No tienes autorización para crear esta tarea  2' });


            }else{


                await tarea.save();
                res.json( tarea );

            }


            }
        
        }
        catch (error) {

            console.log(error);
            res.status(500).json({
                msg: 'No fue posible crear tarea'
            })
  

}
    }


export const actualizarTarea = async (req: Request, res: Response) => {

    const authorization = req.get("Authorization");

    const id_jwt = obtenerIdJwt(authorization);

    const { id }=req.params;
    const { body }=req;
    

    try {

        const tarea = await Tarea.findByPk(id);
        const jsonTarea= JSON.parse( JSON.stringify(tarea));

        if (!tarea){

            return res.status( 404 ).json({ 
                msg:'No existe un usuario con el id ' + id });
        }
        else{


            if(jsonTarea.id_usuario !== id_jwt){
                return res.status( 404 ).json({
                    msg:'No tienes autorización para actualizar esta tarea 1' });
            }
            else{

                if(req.body.id_usuario !== id_jwt){
                    return res.status( 404 ).json({
                        msg:'No tienes autorización para actualizar esta tarea  2' });


                }else{


                    await tarea.update(body);
        
                    res.json(tarea);

                }


                }

        }
    }
     
    catch (error) {

                console.log(error);
                res.status(500).json({
                msg: 'No fue posible actualizar tarea'});
}
};

export const eliminarTarea = async (req: Request, res: Response) => {

   const authorization = req.get("Authorization");
   const id_jwt= obtenerIdJwt(authorization);
    const { id }=req.params;

    try{

    const tarea = await Tarea.findByPk(id);
    const jsonTarea= JSON.parse( JSON.stringify(tarea));

    if (!tarea){

        return res.status( 404 ).json({ 
            msg:'No existe un usuario con el id ' + id });
    }

    else{
        if(jsonTarea.id_usuario !== id_jwt){
            return res.status( 404 ).json({
                msg:'No tienes autorización para eliminar esta tarea ' });
        }
        else{

                await tarea.destroy();
               
                res.json({msg:'Tarea eliminada' });
            }
        
    }
}



catch (error) {

    console.log(error);
    res.status(500).json({
    msg: 'No fue posible eliminar tarea'});
}
};
//
export const obtenerIdJwt =  (authorization: string | undefined) => {


    console.log(authorization)
    
    let token = "";
    if (authorization && authorization.toLowerCase().startsWith("bearer")) {
      token = authorization.split(" ")[1];
    }
    let decodedToken: { id?: string } = {};
    try {
      decodedToken = jwt.verify(token, 'cccc' as string) as { id?: string };
    } catch {}
  
   const jsonToken= JSON.parse( JSON.stringify(decodedToken));
    console.log("este es el tokecnizado: " + jsonToken.id )


    return jsonToken.id;
}
   