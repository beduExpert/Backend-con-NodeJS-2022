# Ejemplo 2

## Objetivo

* Hacer queries sobre un tipo definido por nosotros

## Requerimientos

* Haber realizado el [postwork de la sesión 03](../../sesion03/postwork/) o tener acceso al [código](../../sesion03/postwork/graphql-api/)

## Desarrollo

* Tomando como base el proyecto del [Ejemplo 01](./ejemplo01), vamos a definir el tipo Book con los siguientes campos:
	* asin
	* title
	* author
	* pages

```js
  type Book {
    asin: ID,
    title: String
    author: String
    pages: Int
  }
```

* Ahora pasemos a definir los `queries` para:
	* getAllBooks
	* getBook
```js
  type Query {
    getAllBooks: [Book],
    getBook(asin:ID!): Book
  }
```
* último vamos a definir los `resolvers` correspondientes
```js
  Query: {
    getAllBooks: () => books,
    getBook: (_, { asin }) => {
      return books.find(e => e.asin == asin)
    },
  },
```
* para probar que lo que hicimos es correcto, vamos a modificar el archivo `package.json` y agregemos el script de arranque correspondiente
```json
"start": "node src/index.js"
```

* Hagamos un array de libros para tener información a consultar

```js
let books = [
  { asin: 'B00DQ845EA', title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', pages: 308 },
  { asin: 'B015NTIXWE', title: 'Ego Is the Enemy', author: 'Ryan Holiday', pages: 247 },
  { asin: 'B00ICN066A', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', pages: 469 },
]
```

> Si quires agregar más libros, puedes consultar algunos títulos en [Amazon](https://www.amazon.com.mx/Sapiens-Brief-History-Humankind-English-ebook/dp/B00ICN066A) en la sección `Detalles del producto`


* probemos nuestros cambios con ayuda de la extensión [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) o con [Apollo Studio](https://studio.apollographql.com/)

```sh
### Parametrizando en el query directamente
POST http://127.0.0.1:4000/graphql HTTP/1.1
X-Request-Type: GraphQL
Content-Type: application/json

query {
  getAllBooks {
    asin
    title
  }
}

### Parametrizando a través de variables
POST http://127.0.0.1:4000/graphql HTTP/1.1
X-Request-Type: GraphQL
Content-Type: application/json

query {
  getBook(asin: "B00ICN066A") {
    asin
    title
  }
}
```