# Ejemplo 2

## Objetivo

* Tener un servidor graphql que maneje persistencia en BD
* Integrar sequelize con Apollo Server

## Requerimientos

* Haber configurado `sequelize` y el modelo `Book`
* Tener `Apollo Server` configurado de acuerdo a lo visto en la [sesión 04](../../sesion04/)
* ...

## Desarrollo

* Copiemos lo desarrollado en el [ejemplo 01](../ejemplo01/) en un nuevo proyecto

* agreguemos las dependencias de Apollo Server con
    `npm i graphql apollo-server apollo-server-errors`

* Configuremos nuestro servidor como ya sabemos en el archivo `index.js`; no es necesario que mantengas nada de lo lo hecho en el [ejemplo 01](../ejemplo01/)
```js
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  logger.info(`🚀  Servidor listo en ${url}, inicializado en ${process.env.NODE_ENV} a las ${new Date().toISOString()}`)
})
```

* Ajustemos nuestro resolver para que lo haga con la conexión a la BD
```js
getAllBooks: async () => await sequelize.models.Book.findAll(),
```

* Arranquemos el proyecto y probemos que funciona; por ahora nos regresa un array vacio ya que aún no ponemos datos
```js
POST http://127.0.0.1:4000/graphql HTTP/1.1
X-Request-Type: GraphQL
Content-Type: application/json

query {
  getAllBooks {
    asin
    title
  }
}
```