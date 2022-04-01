# Ejemplo 3

## Objetivo

* Generar un JWT para un usuario registrado
* Enviar mensaje de error para intentos de login fallidos

## Requerimientos

* Haber concluido el [reto 01](../reto01/) con el `signUp` de un usuario
* instalar jwt con `npm i jsonwebtoken`

## Desarrollo

* Inicializa un proyecto que tenga lo visto hasta el [reto 01](../reto01/) con el `signUp` de un usuario

* En los `schemas`, genera la mutación `signIn` que pida el correo y password y regrese una cadena
```js
signIn(email:String!, password:String!): String
```

* Hagamos el `resolver` de `signIn` que reciba `email` y `password`
```js
signIn: async (_, { email, password }) => {
    // contenido del resolver ...
}
```
* comencemos por buscar al usuario en BD
```js
// buscamos al usuario en la BD
const user = await sequelize.models.User.findOne({ where: { email } })
```
* verifiquemos que el resultado no sea nulo y que el password corresponda al almacenado en la BD, en caso contrario, mandemos un mensaje de error
```js
if (user && await compare(password, user.password)) {

} else {
    logger.error(`[signIn] Credenciales inválidas para ${email}`) // por seguridad no loggeamos el password
    throw new AuthenticationError('Invalid credentials')
}
```

* en caso de que los datos sean correctos, generemos el `payload` del `jwt`
```js
const tokenData = {
    fullName: user.name + ' ' + user.lastname,
    email,
    isAdmin: user.isAdmin
}
```
* generamos el `jwt` y lo enviamos como respuesta
```js
logger.info(`[signIn] El usuario ${user.id} a accedido al sistema`)
// generamos el JWT y lo regresamos
return sign(tokenData, process.env.JWT_SECRET, { expiresIn: 180 }) // expira en 3'
```
* Ejecuta el signin a un usuario registrado
> No olvides ejecutar las operaciones de `signUp` primero
```js
POST http://localhost:4000/ HTTP/1.1
Content-Type: application/json
X-Request-Type: GraphQL

mutation {
  signIn(email: "beto@bedu.org", password: "b3T0P4$$w0rD")
}
```