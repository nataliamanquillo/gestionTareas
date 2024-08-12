import { Request, Response } from 'express';
import States from '../models/state';  



export const listarState = async ( req: Request, res: Response) => {


    const { id_country }=req.params;
  
    const state = await States.findAll(

        {
            where: {
                
              id_country:  id_country
            }
          }

    );
    const jsonState = JSON.parse( JSON.stringify(state[0]));
    res.json( state );

 }
 