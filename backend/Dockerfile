# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   Dockerfile es un archvio de instrucciones, el cual en el formato    #
#   que docker pide, permite especificar como se generara una imagen    #
#   para que luego pueda ser creado un container en base a esta.        #
#                                                                       #
#   En este ejemplo crearemos un Dockerfile para un servidor Nodejs     #
#   con usos varios                                                     #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# FROM es el primer comando de docker que se usa en una plantilla Dockerfile.
# Esta permite decirle a docker que imagen base se usara para generar la imagen
# y que luego las demas instrucciones se escribiran por ensima.
FROM node:lts

# Crear el directorio de la aplicacion
WORKDIR /usr/src/app

# Instalar dependencias de la app
COPY package*.json ./

# RUN es un commando que permite ejecutar una instruccion por consola dentro
# del container al momento de crearse.
RUN npm install

# Copiando el codigo de la app de manera separada
COPY . .

# Expongo el puerto donde esta corriendo la app de express 
# hacia el exterior del container
EXPOSE 3000

# Por ultimo, definimos el comando que se quiere que se ejecute al final para arrancar
# la aplicacion express
CMD [ "npm", "start" ]