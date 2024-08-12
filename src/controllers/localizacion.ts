import { Request, Response } from 'express';

import {getUbicacion} from "../geocod";
import { count } from 'console';




export const verubicacion = async (direccion: string, country:string, state:string, city:string) => {




    const geocodeApi = await getUbicacion(direccion,country,state,city)
    return geocodeApi;

 }
 