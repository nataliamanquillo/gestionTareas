import { Request, Response } from 'express';
import Estado from '../models/estado';  



export const listarEstados = async ( req: Request, res: Response) => {

    const estados = await Estado.findAll();
    res.json( estados );

 }
 