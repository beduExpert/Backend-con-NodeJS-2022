# Ejemplo 3

## Objetivo
* Configurar una mutación para modificar datos
* Aprender cómo lanzar errores en flujos no deseados

## Requerimientos

* Haber concluido el reto 02
* instalar Apollo Errors mediante `npm i apollo-server-errors`

## Desarrollo
* definamos el schema de una mutación para actualizar un libro
    * requiriendo asin de manera obligatoria
    * solicitar el resto de los parametros de un libro
    * regresar un Book
```js
  type Mutation {
    updateBook(asin:ID!,title:String, author:String, pages:Int): Book
  }
```

* Hagamos el resolver correspondiente
```js
Mutation: {
    updateBook: async (_, { asin, title, author, pages }) => {
        // buscamos el libro con base al asin proporcionado
        let bookFound = books.find(e => e.asin == asin)
        // Sino lo encontramos lanzamos un error
        if (!bookFound) {
            logger.error(`Book not found with asin: ${asin}`)
            throw new ApolloError('Book not found', 'ERR003');
        }
        // En caso de encontrarlo actualizamos las propiedades que no vengan nulas
        title && (bookFound.title = title)
        author && (bookFound.author = author)
        pages && (bookFound.pages = pages)
        // actualizamos el array de libros
        books = [...books.filter(e => e.asin !== asin), bookFound]
        return bookFound;
    },
},
```

* Probamos el desarrollo listando los libros como estan ahora
```
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

* Intentamos actualizar con un asin no existente para ver el error
```
POST http://127.0.0.1:4000/graphql HTTP/1.1
X-Request-Type: GraphQL
Content-Type: application/json

mutation {
  updateBook(asin: "ABCDEFFEDC", title: "Should be a new Title") {
    asin
    title
  }
}
```
* Actualizamos un libro con un asin existente
```
POST http://127.0.0.1:4000/graphql HTTP/1.1
X-Request-Type: GraphQL
Content-Type: application/json

mutation {
  updateBook(asin: "B00DQ845EA", title: "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers") {
    asin
    title
  }
}
```
* Volvemos a lanzar el listado de libros para ver si la actualización ha funcionado