# Reto 01: M茅todos y refactor

## Objetivo 馃幆

* Practicar la creaci贸n de m茅todos
* Continuar la refactorizaci贸n del proyecto

## Desarrollo 馃摑

* Tomando como base el proyecto del [ejemplo 02](../ejemplo02/), haz un protecto llamado `reto 01` y copia la l贸gica desarrollada all谩

* En `BookController`, completa los siguientes m茅todos para tener la l贸gica de la gesti贸n de libros en un solo lugar

```ts
import { ApolloError } from "apollo-server-errors";
import { sequelize } from "../db";

export class BookController {

    async getBooks() {
        // TODO: completar l贸gica para el m茅todo
    }

    async getBook(asin: string) {
        // TODO: completar l贸gica para el m茅todo
    }

    async saveBook(asin: string, title: string, author: string, pages: number) {
        return await sequelize.models.Book.create({ asin, title, author, pages })
    }

    async updateBook(asin: string, title: string, author: string, pages: number) {
        // TODO: completar l贸gica para el m茅todo
    }

}
```

* En el archivo de `resolvers`, completa las operaciones con llamadas a los m茅todos que acabas de realizar

```ts
import { BookController } from "./controller/BookController"

const bookController = new BookController()

export const resolvers = {
    Query: {
        getAllBooks: (_, __, { token }) => {
            // TODO: completar l贸gica llamando al controlador
        },
        getBook: (_, { asin }, { token }) => {
            // TODO: completar l贸gica llamando al controlador
        }
    },
    Mutation: {
        insertBook: (_, { asin, title, author, pages }, { token }) => {
            return bookController.saveBook(asin, title, author, pages)
        },
        updateBook: (_, { asin, title, author, pages }, { token }) => {
            // TODO: completar l贸gica llamando al controlador
        },
        signUp: (_, { input: user }) => {
            return null
        },
        signIn: (_, { email, password }) => {
            return null
        }
    }
}
```

<details>
	<summary>Solucion 馃敄</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` est谩 el c贸digo
* En la carpeta `client` las llamadas que pueden invocarse con la extensi贸n `REST Client`
* En el archivo `package.json` se agreg贸 el script de arranque
</details>
