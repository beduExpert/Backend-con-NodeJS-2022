# Reto 03: Rotación de logs

## Objetivo 🎯
 
Configurar la rotación de los archivos de bitácora winston-daily-rotate-file

## Desarrollo 📝

* Crea un proyecto node para este reto
* Configura `babel` como se vió en el [ejemplo 02](../ejemplo02)
> recuerda instalar las dependencias de `babel` modo `desarrollo` ya que el compilador no tiene utilidad en producción
* Configura `winston` como se vió en el [ejemplo 03](../ejemplo03)
* Usando como base la documentación del módulo [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file)
	* Cambia la configuración que vimos en el [ejemplo 03](../ejemplo03) para que el log rote cada minuto
	* Ahora que ya has entendido como funciona, haz que rote cada día
	> por supuesto que podrás ver el resultado hasta mañana que vuelvas a ejecutar el proyecto pero esta es una configuración mas real y debes aprender a hacerla

<details>
	<summary>Solucion 🔖</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` está el código
* En el archivo `package.json` se agregó el script de arranque
* En vez de usar `format: winston.format.json()` para el log general, prueba con este formato:
```js
// format: winston.format.json()
// definición de un formato personalizado
format: winston.format.combine(
	winston.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
	winston.format.errors({ stack: true }),
	winston.format.printf(({ timestamp, level, message }) => `${timestamp} | ${level} | ${message}`)
),
```

</details>
