# Reto 02: Servidor http con variables personalizadas

## Objetivo 🎯
 
Crear un servidor http entendiendo las variables que lo componen

## Pasos 📝

Entendiendo que la petición de entrada llega en el parametro 'req', hacer una API que cumpla con lo siguiente
* Responda una petición a `/ping`
    * solo cuando es invocado por `GET`
    * enviar un `JSON` con dos nodos, `success` y `body`
    * el nodo `body` debe enviar la cadena `pong`
* Responda una petición a `/health`
    * solo cuando es invocado por `GET`
    * enviar un `JSON` con dos nodos, `success` y `body`
    * el nodo `body` debe ser un objeto que contiene `version` y `launchDate`
* Responda a cualquier otra llamada con
    * un `JSON` con dos nodos, `success` y `body`
    * el nodo `body` debe enviar la cadena `API Bedu V1`
    * {
        "success": true,
        "body": "Bedu API V1"
        }

<details>
	<summary>Solucion 🔖</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` está el código
* En la carpeta `client` las llamadas que pueden invocarse con la extensión `REST Client`
* En el archivo `package.json` se agregó el script de arranque

</details>
