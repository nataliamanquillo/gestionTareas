import { Request, Response } from 'express';
import Usuario from '../models/usuario';  
import bcrypt from 'bcrypt'



const saltRounds = 10;
export const crearUsuario = async (req: Request, res: Response) => {

    const {nombre, correo, contraseña } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

        const usuario = await Usuario.create({
           nombre,
            correo,
            contraseña: hashedPassword,
        });
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




   