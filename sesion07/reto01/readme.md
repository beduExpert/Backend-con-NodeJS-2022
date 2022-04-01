# Reto 01: Métodos y refactor

## Objetivo 🎯

* Practicar la creación de métodos
* Continuar la refactorización del proyecto

## Desarrollo 📝

* Tomando como base el proyecto del [ejemplo 02](../ejemplo02/), haz un protecto llamado `reto 01` y copia la lógica desarrollada allá

* En `BookController`, completa los siguientes métodos para tener la lógica de la gestión de libros en un solo lugar

```ts
import { ApolloError } from "apollo-server-errors";
import { sequelize } from "../db";

export class BookController {

    async getBooks() {
        // TODO: completar lógica para el método
    }

    async getBook(asin: string) {
        // TODO: completar lógica para el método
    }

    async saveBook(asin: string, title: string, author: string, pages: number) {
        return await sequelize.models.Book.create({ asin, title, author, pages })
    }

    async updateBook(asin: string, title: string, author: string, pages: number) {
        // TODO: completar lógica para el método
    }

}
```

* En el archivo de `resolvers`, completa las operaciones con llamadas a los métodos que acabas de realizar

```ts
import { BookController } from "./controller/BookController"

const bookController = new BookController()

export const resolvers = {
    Query: {
        getAllBooks: (_, __, { token }) => {
            // TODO: completar lógica llamando al controlador
        },
        getBook: (_, { asin }, { token }) => {
            // TODO: completar lógica llamando al controlador
        }
    },
    Mutation: {
        insertBook: (_, { asin, title, author, pages }, { token }) => {
            return bookController.saveBook(asin, title, author, pages)
        },
        updateBook: (_, { asin, title, author, pages }, { token }) => {
            // TODO: completar lógica llamando al controlador
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
	<summary>Solucion 🔖</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` está el código
* En la carpeta `client` las llamadas que pueden invocarse con la extensión `REST Client`
* En el archivo `package.json` se agregó el script de arranque
</details>
