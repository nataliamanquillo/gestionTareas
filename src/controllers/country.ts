import { Request, Response } from 'express';
import Countries from '../models/country';  



export const listarCountry = async ( req: Request, res: Response) => {

    const country = await Countries.findAll();
    res.json( country );

 }
 