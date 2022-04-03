# Ejemplo 2: Book Model y Controller

## Objetivo

* Codificar `controladores` para gestionar la lógica de los `resolvers`
* Refactorizar los `resolvers` que hemos hecho anteriormente

## Requerimientos

* Haber concluido el [ejemplo 01](../ejemplo01/)

## Desarrollo

* Hagamos una copia del [ejemplo01](../ejemplo01/) donde tenemos nuestro proyecto corriendo con `TypeScript`

* Copiemos la carpeta [`db`](../../sesion06/reto02/src/db/) de proyectos anteriores y solo cambiemos la extensión de `.js` a `.ts` a todos los archivos

* Dentro de `src`, hagamos una carpeta llamada `controller` para mover toda la lógica de los resolvers a clases dentro de esta carpeta

* Empecemos con una clase llamada `BookController.ts` con la siguiente estructura

`src/controller/BookController.ts`
```ts
export class BookController {
    // métodos para gestionar Book
}
```

* Creemos un método llamado `saveBook` y migremos la lógica para guardar libros del `resolver` `insertBook`
```ts
  async saveBook(asin: string, title: string, author: string, pages: number) {
      return await sequelize.models.Book.create({ asin, title, author, pages })
  }
```

* En el archivo de `resolvers`, hagamos una instancia de `BookController` y sustituyamos en contenido de `insertBook` con una llamada al método `saveBook`

> Para mantener las cosas simples, por ahora vamos a eliminar la lógica para `auth`

`src/resolver.ts`
```ts
import { BookController } from "./controller/BookController"

const bookController = new BookController()

export const resolvers = {
    Query: {

    },
    Mutation: {
        insertBook: (_, { asin, title, author, pages }, { token }) => {
            return bookController.saveBook(asin, title, author, pages)
        },
    }
}
```

* Pomgamos los `schemas` que ya hemos desarrollado anteriormente solo que ahora en un archivo con extensión `.ts`
`src/schema.ts`
```ts
import { gql } from 'apollo-server'

export const typeDefs = gql`

type Query {
    getAllBooks: [Book],
    getBook(asin:ID!): Book
  }

  type Mutation {
    insertBook(asin:ID!, title:String!, author:String!, pages:Int!): Book,
    updateBook( asin:ID!, title:String, author:String, pages:Int): Book,
    signUp(input: UserInput): User
    signIn(email:String!, password:String!): String
  }

  type Book {
    asin: ID
    title: String
    author: String
    pages: Int
  }

  type User {
    id: Int
    name: String
    lastname: String
    email: String
    isAdmin: Boolean
  }

  input UserInput {
    name: String
    lastname: String
    email: String!
    password: String!
    isAdmin: Boolean
  }

`
```

* Ejecutemos el proyecto y verifiquemos que las inserciones en la BD se han efectuado correctamente
