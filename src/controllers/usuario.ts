import { Request, Response } from 'express';
import Usuario from '../models/usuario';  



export const crearUsuario = async (req: Request, res: Response) => {

    const { body }=req;


    try {

        const usuario = await Usuario.create(body)
        await usuario.save();
            res.json( usuario );
        
        }
        catch (error) {

            console.log(error);
            res.status(500).json({
                msg: 'No fue posible crear el usuario'
            })
  

}
    }




   