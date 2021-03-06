# Reto 02: Operaciones protegidas

## Objetivo 馃幆
 
* Proteger rutas con JWT
* Conocer la funci贸n context de `Apollo Server`

## Desarrollo 馃摑

* Modifiquemos la instancia de `Apollo Server` para agregar la funci贸n [`context`](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#context) que regresa un objeto que se pasa a cada resolver

> [Resolvers docs](https://www.apollographql.com/docs/apollo-server/data/resolvers/#the-context-argument): El argumento de `context` es 煤til para pasar cosas que cualquier `resolver` podr铆a necesitar, como la autenticaci贸n, las conexiones a bases de datos y funciones personalizadas.
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
* Genera la funci贸n `verifyToken` que valide el `token` mediante `jwt.verify`

* Usa la funci贸n anterior para bloquear el paso a las operaciones con `book` cuando el token no sea v谩lido o no se haya proporcionado
> HINT: Cuando no haya token, puedes lanzar el siguiente Apollo Error: `throw new ApolloError('missing token')`

* Ejemplo para `getBook` se tiene:
```js
getBook: async (_, { asin }, { token }) => {
	// verificaci贸n de token
	verifyToken(token)
	// consulta de books
	const book = await sequelize.models.Book.findOne({
		where: { asin }
	})
	return book
},
```
> NOTA: Observa el tercer parametro del resolver `{ token }`, en el `context` se baja del `header` y se pasa a una variable que est谩 disponible en cualquier resolver

* Ejecuta las operaciones de `book` como las tenemos hasta ahora y ya no deber铆an de responder con datos dada la falta de token

* Agrega `header` `Authorization: JWT_VALID_TOKEN` y valida que puedes obtener la informaci贸n si el `jwt` es v谩lido

<details>
	<summary>Solucion 馃敄</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` est谩 el c贸digo
* En la carpeta `client` las llamadas que pueden invocarse con la extensi贸n `REST Client`
* En el archivo `package.json` se agreg贸 el script de arranque
</details>
