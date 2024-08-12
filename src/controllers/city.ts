import { Request, Response } from 'express';
import Cities from '../models/city';  



export const listarCity = async ( req: Request, res: Response) => {

    const{id_state} = req.params;

        const city = await Cities.findAll(

            {
                where: {
                    
                  id_state:  id_state
                }
              }
    
        );
        const jsonCCity = JSON.parse( JSON.stringify(city[0]));
    res.json( city );

 }
 