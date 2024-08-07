# gestionTareas


##Sistema de Gestion de Tareas
###Pre requisitos

Node.js v20.16.0
mysql
typescript Version 5.5.4


## Instalación
clonar el repositorio

git clone https://github.com/nataliamanquillo/gestionTareas.git

### ingresar a la carpeta del repositorio
cd gestionTareas

### instalar dependencias
npm install 

### importar base de datos
 
ejecute el script de la base de datos que se encuentra en el repositorio


### configurar base de datos
en database/connection, actualizar los datos de conexión en la base de datos

        const database = new Sequelize ('gestiontareas', 'root', '', {
            host: 'localhost',
            dialect: 'mysql',


        });


### Ejecutar en la terminal
tsc && nodemon dist/app

la api queda desplegada en la url 
localhost:8000/api


## Ver DEMO

Para ver la api implementada en heroku acceda a la url

https://gestiontareas-e1103ffbaeac.herokuapp.com


## Documentacion
para ver la documentación desde swagger ejecute
npm run dev 

para acceder vaya al navegador acceda a la url
http://localhost:8080/api-docs/


