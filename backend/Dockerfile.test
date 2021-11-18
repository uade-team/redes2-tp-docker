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
FROM alpine:latest

RUN apk update
RUN apk add python3
RUN apk add git

# RUN es un commando que permite ejecutar una instruccion por consola dentro
# del container al momento de crearse. En esta linea estaremos instalando
# el motor de nodejs.
RUN apk add --update nodejs npm

# En esta linea instalaremos el gestor de packetes NPM para node
RUN apk add --update npm

    

