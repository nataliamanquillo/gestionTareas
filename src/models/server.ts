import express, {Application}  from "express";
import gestionRoutes from '../routes/gestionRutas';
import cors from 'cors';
import database from "../database/connection";



class Server{
    private app: Application;
    private port: string ;

    private apiPaths= {
         tarea:'/api',

     }

    constructor(){
      this.app = express();
      this.port =process.env.PORT || '8000';
      
      this.databaseConnection();
      this.middlewares ();
      this.routes ();
       
    }

    async databaseConnection(){
    
         try {
            await database.authenticate();
             console.log('Database online');
         } catch (error) {
            console.error('Unable to connect to the database:', error);


         }

        }

    middlewares() {

        this.app.use(cors());
        this.app.use(express.json());
  
    }
    routes() {
         this.app.use(this.apiPaths.tarea, gestionRoutes);
     }



listen(){
    this.app.listen(this.port, ()=>{
        console.log('Servidor corriendo en puerto ' + this.port);
    })
}
}

export default Server;