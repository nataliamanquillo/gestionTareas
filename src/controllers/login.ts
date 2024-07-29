import { Request, Response } from "express";
import database from "../database/connection";
import jwt from "jsonwebtoken";
import Usuario from "../models/usuario";


export const loginUsuario = async (req: Request, res: Response) =>{
    const { body }=req;

    const usuario = await Usuario.findAll(
        {
            where: {
              correo: req.body.correo,
            }
          }
    );

    
    const jsonUsuario = JSON.parse( JSON.stringify(usuario[0]));

    console.log(jsonUsuario);

if(req.body.correo == jsonUsuario.correo && req.body.contraseña == jsonUsuario.contraseña ){

      
     const id =jsonUsuario.id;
    const correo = jsonUsuario.correo;
    const contraseña = jsonUsuario.contraseña;
    const token = jwt.sign(

     {id, correo, contraseña}  ,

    'cccc'

);
   res.json({ Token: token, id_usuario:id, correo, contraseña });
       

}else{

    res.status(401).json({
        msg: 'El usuario o la contraseña no son correctos'
    })
}

   
      

}
