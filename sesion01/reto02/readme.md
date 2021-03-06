# Reto 02: Servidor http con rutas

## Objetivo 馃幆
 
Crear un servidor http entendiendo las variables que lo componen

## Pasos 馃摑

Entendiendo que la petici贸n de entrada llega en el parametro 'req', hacer una API que cumpla con lo siguiente
* Responda una petici贸n a `/ping`
    * solo cuando es invocado por `GET`
    * enviar un `JSON` con dos nodos, `success` y `body`
    * el nodo `body` debe enviar la cadena `pong`
* Responda una petici贸n a `/health`
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
	<summary>Solucion 馃敄</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` est谩 el c贸digo
* En la carpeta `client` las llamadas que pueden invocarse con la extensi贸n `REST Client`
* En el archivo `package.json` se agreg贸 el script de arranque

</details>
