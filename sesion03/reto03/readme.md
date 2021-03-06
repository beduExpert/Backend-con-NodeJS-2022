# Reto 03: Rotaci贸n de logs

## Objetivo 馃幆
 
Configurar la rotaci贸n de los archivos de bit谩cora winston-daily-rotate-file

## Desarrollo 馃摑

* Crea un proyecto node para este reto
* Configura `babel` como se vi贸 en el [ejemplo 02](../ejemplo02)
> recuerda instalar las dependencias de `babel` modo `desarrollo` ya que el compilador no tiene utilidad en producci贸n
* Configura `winston` como se vi贸 en el [ejemplo 03](../ejemplo03)
* Usando como base la documentaci贸n del m贸dulo [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file)
	* Cambia la configuraci贸n que vimos en el [ejemplo 03](../ejemplo03) para que el log rote cada minuto
	* Ahora que ya has entendido como funciona, haz que rote cada d铆a
	> por supuesto que podr谩s ver el resultado hasta ma帽ana que vuelvas a ejecutar el proyecto pero esta es una configuraci贸n mas real y debes aprender a hacerla

<details>
	<summary>Solucion 馃敄</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` est谩 el c贸digo
* En el archivo `package.json` se agreg贸 el script de arranque
* En vez de usar `format: winston.format.json()` para el log general, prueba con este formato:
```js
// format: winston.format.json()
// definici贸n de un formato personalizado
format: winston.format.combine(
	winston.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
	winston.format.errors({ stack: true }),
	winston.format.printf(({ timestamp, level, message }) => `${timestamp} | ${level} | ${message}`)
),
```

</details>
