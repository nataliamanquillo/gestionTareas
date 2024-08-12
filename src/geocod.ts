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

    const response = await instance.get(`json?address=`+`${geocoderQuery}`+`&key=`+`${apikey}`)
    //guarda en res
    //res.data están los datos
    .then(res => res.data)
    //transforma en un formato json, respuesta de la api
    //accedder a un formato donde pueda acceder más fácil a los datos
    .then(json => {
      if (json.results.length === 0) {
        return null
      }

      //
      const lat = json.results['0'].geometry.location.lat
      const lng = json.results['0'].geometry.location.lng

      console.log(json.results['0'].geometry.location);


      location =  json.results['0'].geometry.location
      
    });


    return location
  }



