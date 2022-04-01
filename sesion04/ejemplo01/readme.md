# Ejemplo 1

## Objetivo

* Configurar Apollo Server
* Ejecutar un query en Apollo Studio

## Desarrollo
* vamos a crear un proyecto desde cero
```sh
mkdir ejemplo01-apolloserver
cd ejemplo01-apolloserver
```
* inicializamos el proyecto node dentro de la carpeta
```sh
npm init -y
```
* instalamos las dependencias de `apollo server` que es la plataforma donde vamos a desarrollar y la implementación de la especificación de `graphql` para `js`
```sh
npm i apollo-server graphql
```
* creamos la carpeta `src` y un archivo `index.js` dentro de ella
```sh
mkdir src
touch src/index.js
```
* importamos la dependencia de `Apollo Server` y gql para definir nuestros tipos
```js
const { ApolloServer, gql } = require('apollo-server');
```
* creamos un `GraphQL schema`
```js
const typeDefs = gql`
  # Este es un comentario en la definición de un schema
  type Query {
    helloWorld: String
  }
`;
```
* Definimos un resolver para el query recien creado
```js
const resolvers = {
  Query: {
    helloWorld: () => 'Hello World'
  },
};
```

* creamos una instancia de ApolloServer pasandole el tipo y resolver recien creado
```js
const server = new ApolloServer({ typeDefs, resolvers });
```
* por último usamos la instación de Apollo server para poner a correr el servidor
```js
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
```
* modificamos el script de arranque para ejecutar el proyecto
```json
"start": "node index.js"
```
* ingresamos a `http://localhost:4000/` para ser redireccionados a `Apollo Studio` donde vamos a probar nuestro query

```js
query {
  helloWorld
}
```