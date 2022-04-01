# Reto 01: Creación de variables de ambiente

## Objetivo 🎯

* Conocer la variable `process.env`
* Entender para que sirve el archivo `.env`

## Desarrollo 📝

* teniendo `.env` configurado imprimir la variable `process.env`
* agregar las siguientes `keys` al archivo `.env`
```
NODE_ENV = development
JWT_SECRET = MY_SECRET_KEY
```
* imprimir la variable `process.env` nuevamente
> ¿qué pasa si cambias el archivo `.env` una vez que el proyecto está en ejecución?

<details>
	<summary>Solucion 🔖</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` está el código
* En el archivo `package.json` se agregó el script de arranque
</details>
