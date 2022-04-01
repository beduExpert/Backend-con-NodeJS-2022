# Reto 02: Operaciones protegidas

## Objetivo 🎯
 
* Proteger rutas con JWT
* Conocer la función context de `Apollo Server`

## Desarrollo 📝

* Modifiquemos la instancia de `Apollo Server` para agregar la función [`context`](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#context) que regresa un objeto que se pasa a cada resolver

> [Resolvers docs](https://www.apollographql.com/docs/apollo-server/data/resolvers/#the-context-argument): El argumento de `context` es útil para pasar cosas que cualquier `resolver` podría necesitar, como la autenticación, las conexiones a bases de datos y funciones personalizadas.
```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      token: req.headers.authorization || ''
    }
  }
})
```
* Genera la función `verifyToken` que valide el `token` mediante `jwt.verify`

* Usa la función anterior para bloquear el paso a las operaciones con `book` cuando el token no sea válido o no se haya proporcionado
> HINT: Cuando no haya token, puedes lanzar el siguiente Apollo Error: `throw new ApolloError('missing token')`

* Ejemplo para `getBook` se tiene:
```js
getBook: async (_, { asin }, { token }) => {
	// verificación de token
	verifyToken(token)
	// consulta de books
	const book = await sequelize.models.Book.findOne({
		where: { asin }
	})
	return book
},
```
> NOTA: Observa el tercer parametro del resolver `{ token }`, en el `context` se baja del `header` y se pasa a una variable que está disponible en cualquier resolver

* Ejecuta las operaciones de `book` como las tenemos hasta ahora y ya no deberían de responder con datos dada la falta de token

* Agrega `header` `Authorization: JWT_VALID_TOKEN` y valida que puedes obtener la información si el `jwt` es válido

<details>
	<summary>Solucion 🔖</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` está el código
* En la carpeta `client` las llamadas que pueden invocarse con la extensión `REST Client`
* En el archivo `package.json` se agregó el script de arranque
</details>
