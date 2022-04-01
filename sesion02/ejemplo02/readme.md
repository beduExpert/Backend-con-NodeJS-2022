# Ejemplo 2

## Objetivo
Ejecutar una instancia de graphql desarrollada por nosotros mismos con `express-graphql`

## Requerimientos
* `node lts instalado`

## Desarrollo

* inicializar un proyecto node
* crear la carpeta `src` para poner nuestro `código fuente`
* instalar las dependencias `express express-graphql graphql`
* actualizar el nodo `scripts` para agregar `start`con `nodemon` y ejecutar el archivo `index.js`
* crear archivos para:
  * schema.js
  ```js
  const { buildSchema } = require("graphql");
  // construcción del schema con GraphQL Schema Language
  const schema = buildSchema(`
    type Query {
      saludo: String
    }
  `);
  module.exports = { schema }
  ```
  * resolver.js
  ```js
  // definición de `resolvers`
  const resolver = {
      saludo: () => {
          return 'Hola beto!';
      },
  };

  const expertos = [
      { id: 333, nombre: 'Ethien', apellido: 'Salinas' },
      { id: 334, nombre: 'Pedro', apellido: 'Fragoso' },
      { id: 335, nombre: 'Abraham', apellido: 'Tonix' },
  ]

  module.exports = { resolver }
  ```
  * servidor
  ```js
  const express = require('express');
  const { graphqlHTTP } = require('express-graphql');
  const { resolver } = require('./resolver');
  const { schema } = require('./schema');

  var app = express();
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  }));
  app.listen(4000);
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
  ```

* ejecutar el proyecto y correr `queries` para en `GraphiQL`
```
{
  experto(id:333) {
    id
    nombre
    apellido
  }
}
```
## Agregar un nuevo `type` y `query`

* agregar el siguiente schema
  ```
  type Experto {
    id: ID,
    nombre: String
    apellido: String
  }
  ```
* agregar un query que solicite id obligatorio
  ```
  experto(id:ID!): Experto
  ```
* agregar un resolver para encontrar expertos por id
  ```
  experto: ({ id }) => {
    return expertos.find(e => e.id == id)
  },
  ```
