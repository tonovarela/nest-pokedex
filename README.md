<p align="center">
  <a href="#" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Para iniciar el proyecto

1. Tener el CLI de nest
```
npm -i -g @nestjs/cli
```
2. Levantar la base de datos
```
 docker compose up -d

```
3. Realiza la carga de la base de datos (Solo en desarrollo)
```
http://localhost:3000/api/v2/seed
```

4. Clonar el archivo ___.env.template__ a __.env___  y definir las variables 

5. Ejecutar la aplicacion cpn el comando
```
npm run start:dev
```
5. Heroku redeploy sin cambios:
````
git commit --allow-empty -m "Trigger Heroku deploy"
git push heroku master
````

6. Construccion de la imagen de Docker 
Para generar el build
````
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
````
7.  Correr el contenedor de docker

`````
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up

`````


##Stack usado
* MongoDB
* Nestjs