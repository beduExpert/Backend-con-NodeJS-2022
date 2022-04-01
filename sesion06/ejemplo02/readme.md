# Ejemplo 2

## Objetivo

* generar, decodificar y validar `JWTs`
* registrar qué arrojan las funciones `jwt.sign`,`jwt.decode` y `jwt.verify`

## Requerimientos

* tener un ambiente de desarrollo
* instalar la dependencia de jwt con `npm i jsonwebtoken`

## Desarrollo
* hagamos un proyecto con ambiente de desarrollo con lo que ya sabemos

### Generación de tokens

* hagamos uso de la función `jwt.sign` para generar un token
```js
const tokenBasico = jwt.sign({ data: 'token simple' }, process.env.JWT_SECRET)
logger.debug(`[jwt.sign]tokenBasico: ${tokenBasico}`)
```

* para generar un token que expira, podemos pasar la cantidad de segundos
```js
// token que expira
const tokenQueExpiraV1 = jwt.sign({
    data: 'token que expira en una hora'
}, process.env.JWT_SECRET, { expiresIn: 60 * 60 }) // 1h
logger.debug(`[jwt.sign]tokenQueExpiraV1: ${tokenQueExpiraV1}`)
```

* otra alternativa es pasar la unidad de tiempo en una cadena
```js
// token que expira en notación de horas
const tokenQueExpiraV2 = jwt.sign({
    data: 'token que expira en una hora con notación corta'
}, process.env.JWT_SECRET, { expiresIn: '1h' })
logger.debug(`[jwt.sign]tokenQueExpiraV2: ${tokenQueExpiraV2}`)
```

### Decodificación de tokens

* cuando ya tenemos un token, podemos obtener sus valores sin verificar si el token es válido, esto lo hacemos con la función `jwt.decode`

* decodifiquemos los tokens generados anteriormente
```js
// decodificación de tokens sin validación
const tokenBasicoDecodificado = jwt.decode(tokenBasico)
logger.debug(`[jwt.decode]tokenBasicoDecodificado: ${JSON.stringify(tokenBasicoDecodificado)}`)

const tokenQueExpiraV1Decodificado = jwt.decode(tokenQueExpiraV1)
logger.debug(`[jwt.decode]tokenQueExpiraV1Decodificado: ${JSON.stringify(tokenQueExpiraV1Decodificado)}`)

const tokenQueExpiraV2Decodificado = jwt.decode(tokenQueExpiraV2)
logger.debug(`[jwt.decode]tokenQueExpiraV2Decodificado: ${JSON.stringify(tokenQueExpiraV2Decodificado)}`)
```

### Verificación de tokens

* Generalmente, solo vamos a querer obtener el `payload` de un token cuando hemos corroborado que es válido, esto lo hacemos con la función `jwt.verify`

* veamos la validación de un token usando la palabra secreta correcta
```js
// verificación con palabra secreta correcta
try {
    const tokenBasicoVerificado = jwt.verify(tokenBasico, process.env.JWT_SECRET)
    logger.debug(`[jwt.verify]tokenBasicoVerificado: ${JSON.stringify(tokenBasicoVerificado)}`)
} catch (error) {
    logger.error(`[jwt.verify]tokenBasicoVerificado: `, error)
}
```

* ahora veamos qué sucede si pasamos una palabra incorrecta
```js
// verificación con palabra secreta incorrecta
try {
    const tokenBasicoVerificadoConError = jwt.verify(tokenBasico, 'NOT_THE_SECRET_WORD');
    logger.debug(`[jwt.verify]tokenBasicoVerificadoConError: ${JSON.stringify(tokenBasicoVerificadoConError)}`)
} catch (error) {
    logger.error(`[jwt.verify]tokenBasicoVerificadoConError: ${tokenBasico}`, error)
}
```

> NOTA: en un ambiente productivo no queremos guardar registro de los tokens generados en los archivos log, solamente nos interesaría guardar aquellos que generan errores para poder analizarlos posteriormente