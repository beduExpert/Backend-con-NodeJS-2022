import { BookController } from "./controller/BookController"

const bookController = new BookController()

export const resolvers = {
    Query: {
        getAllBooks: (_, __, { token }) => {
            return bookController.getBooks()
        },
        getBook: (_, { asin }, { token }) => {
            return bookController.getBook(asin)
        }
    },
    Mutation: {
        insertBook: (_, { asin, title, author, pages }, { token }) => {
            return bookController.saveBook(asin, title, author, pages)
        },
        updateBook: (_, { asin, title, author, pages }, { token }) => {
            return bookController.updateBook(asin, title, author, pages)
        },
        signUp: (_, { input: user }) => {
            return null
        },
        signIn: (_, { email, password }) => {
            return null
        }
    }
}
