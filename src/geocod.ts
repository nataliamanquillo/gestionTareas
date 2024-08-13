import axios from 'axios';
import { json } from 'express';


const BASE_URL="https://maps.googleapis.com/maps/api/geocode/"


export const instance = axios.create({
   baseURL: BASE_URL

})

export async function getUbicacion(direccion: string, country:string, state:string, city:string) {

    const apikey='AIzaSyBZlJJ_dE5_OEKTuIJMDbIf5ohc_TMba7s'

    var location= {};

    //`1600+Amphitheatre+Parkway,+Mountain+View,+CA`
    const geocoderQuery = encodeURIComponent(direccion+city+state+country.replace(/ /g, '+'))

    await instance.get(`json?address=`+`${geocoderQuery}`+`&key=`+`${apikey}`)
    //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBZlJJ_dE5_OEKTuIJMDbIf5ohc_TMba7s
    //guarda en res
    //res.data están los datos
    .then(res => res.data)

    .then(res => {
      if (res.results.length === 0) {
        return null
      }

      location =  res.results['0'].geometry.location
      
    });


    return location
  }



