import { Request, Response } from 'express';
import Usuario from '../models/usuario';  
import bcrypt from 'bcryptjs'
import { verubicacion } from "../controllers/localizacion";
import Countries from '../models/country';
import State from '../models/state';
import City from '../models/city';



const saltRounds = 10;
export const crearUsuario = async (req: Request, res: Response) => {

    const {nombre, correo, contraseña,direccion,id_city,id_country,id_state } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

        console.log(req.body.id_country)

        const country= await Countries.findAll(
            {
                where: {
                  id: req.body.id_country,
                }
              }
        );
 
        const jsonCountry = JSON.parse( JSON.stringify(country[0]));

        console.log(jsonCountry)

        const state= await State.findAll(
            {
                where: {
                    
                  id: req.body.id_state 
                }
              }
        );

        const jsonState = JSON.parse( JSON.stringify(state[0]));
        const city = await City.findAll(
            {
                where: {
                    
                  id: req.body.id_city
                }
              }
        );
        const jsonCity = JSON.parse( JSON.stringify(city[0]));
     
        

        const responseGeo = await verubicacion(direccion,jsonCountry.name,jsonState.name,jsonCity.name);

        const jsonGeo = JSON.parse( JSON.stringify(responseGeo));


        const usuario = await Usuario.create({
            nombre,
            correo,
            direccion,
            id_country,
            id_state,
            id_city,
            contraseña: hashedPassword,
            lat: jsonGeo.lat,
            lng: jsonGeo.lng
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




   