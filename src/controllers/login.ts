import { Request, Response } from "express";
import database from "../database/connection";
import jwt from "jsonwebtoken";
import Usuario from "../models/usuario";
import  {isValidPassword} from "../utils/hash"

export const loginUsuario = async (req: Request, res: Response) =>{
    const {correo, contraseña } = req.body;



    const usuario = await Usuario.findAll(
        {
            where: {
              correo: req.body.correo,
            }
          }
    );

    


    
    const jsonUsuario = JSON.parse( JSON.stringify(usuario[0]));

    const resp = await isValidPassword(req.body.contraseña, jsonUsuario.contraseña );

    if (!resp){
        return res.status(401).json({
            msg: 'La contraseña es incorrecta'});
    }

    console.log(resp);

if(req.body.correo == jsonUsuario.correo ){

      
    const id =jsonUsuario.id;
    const correo = jsonUsuario.correo;
    const contraseña = jsonUsuario.contraseña;
    const token = jwt.sign(

     {id, correo, contraseña}  ,

    'cccc'

);
   res.json({ Token: token, id_usuario:id, correo });
       

}else{

    res.status(401).json({
        msg: 'El usuario o la contraseña no son correctos'
    })
}

   
      

}
