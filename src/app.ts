import dotenv from 'dotenv';
import Server from './models/server';
import  express  from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';
import routes from './routes/gestionRutas';


dotenv.config();
const app= express()

 const server = new Server();

 server.listen();

app .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(8080, ()=>{
    console.log('Server running on port ');
});
