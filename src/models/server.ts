import express, {Application}  from "express";
import tareaRoutes from '../routes/tarea';



class Server{
    private app: Application;
    private port: string ;

    private apiPaths= {
         tarea:'/api/tarea'
     }

    constructor(){
      this.app = express();
      this.port =process.env.PORT || '8000';
       this.routes ();
       
    }

   

    routes() {
         this.app.use(this.apiPaths.tarea, tareaRoutes);
     }



listen(){
    this.app.listen(this.port, ()=>{
        console.log('Servidor corriendo en puerto ' + this.port);
    })
}
}

export default Server;