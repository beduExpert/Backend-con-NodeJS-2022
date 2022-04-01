# Ejemplo 1

## Objetivo
* configurar bcrypt en un proyecto
* observar qué arrojan las promesas `bcrypt.hash` y `bcrypt.compare`

## Requerimientos

* tener un ambiente de desarrollo
* instalar la dependencia de bcrypt con `npm i bcrypt`

## Desarrollo
* hagamos un proyecto con ambiente de desarrollo con lo que ya sabemos

* generemos algunas constantes para usar en el proyecto
```js
const saltRounds = 10
const passwordEnTextoPlano = 'p4$$w0rD'
const otroPasswordEnTextoPlano = '0tR0p4$$w0rD'
```

### Generación de hash
 * la promesa `bcrypt.hash(password, saltRounds)` nos ayudará a obtener un hash de la cadena ingresada como password, hagamos una función al rededor para poder llamar esta funcionalidad con distintos passwords en caso de ser necesario
 ```js
// generamos un hash para "password"
const generaHash = async (password, saltRounds) => {
    try {
        logger.debug(`bcrypt.hash: ${await bcrypt.hash(password, saltRounds)}`)
    } catch (error) {
        logger.error(error)
    }
}
```
* ejecutemos nuestra función `generaHash` con la constante `passwordEnTextoPlano` que declaramos anteriormente
> En la práctica el password será proporcionado por el usuario de manera dinámica
```js
generaHash(passwordEnTextoPlano, saltRounds)
```

* Observemos los logs y veamos el hash generado, deberíamos tener algo similar a la siguiente línea
```log
[Graphql API] 2022-03-15T15:13:52 | debug | bcrypt.hash: $2b$10$.yCw.jsAB5JW1qw4xmqmpePHRjcBArFjPYMNc9D3ri9F9umduJwPO
```

* copiemos el hash, lo usaremos más adelante

### Comparación de hash contra un password

Ahora que ya tenemos un hash a partir de un password, en algún otro momento vamos a querer comprar si ese hash corresponde al `password` que proporcione el usuario. Para esto `bcrypt` cuenta con el método `compare`.

* comencemos por hacer una función que envuelva el método de `bcrypt`
```js
const comparaHash = (password, hash) => {
    // aquí va la lógica para comprar
}
```

* dentro de esa función, vamos a poner la lógica para usar compare a través de promesas
```js
    try {
        logger.debug(`bcrypt.compare: ${await bcrypt.compare(password, hash)}`)
    } catch (error) {
        logger.error(error)
    }
```

* por último probemos nuestra función con el mismo hash pero pasando el password que lo generó y en otra prueba un password que no usamos para generar ese hash
```js
// con este password SÍ se generó el hash
comparaHash(passwordEnTextoPlano, '$2b$10$0GoJMTUcYIsW7SOEm6rF6uyLO/oeWWQPxvRa9WYL8RXuqY4Ag8PZm')
// con este password NO se generó el hash
comparaHash(otroPasswordEnTextoPlano, '$2b$10$0GoJMTUcYIsW7SOEm6rF6uyLO/oeWWQPxvRa9WYL8RXuqY4Ag8PZm')
```

* corre tu programa y mira la salida en el archivo `log`, debes tener algo similar a esto
```log
[Graphql API] 2022-03-15T15:13:52 | debug | bcrypt.hash: $2b$10$0GoJMTUcYIsW7SOEm6rF6uyLO/oeWWQPxvRa9WYL8RXuqY4Ag8PZm
[Graphql API] 2022-03-15T15:15:13 | debug | bcrypt.compare: false
[Graphql API] 2022-03-15T15:15:13 | debug | bcrypt.compare: true
```

* prueba ejecutando el programa unas cuantas veces más y ve que hash cambia en cada ejecución pero siempre se puede saber si el hash corresponde al password con el método compare