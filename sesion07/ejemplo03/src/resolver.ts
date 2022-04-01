import { BookController } from "./controller/BookController"
import { UserController } from "./controller/UserController"

const bookController = new BookController()
const userController = new UserController()

export const resolvers = {
    Query: {
        getAllBooks: (_, __, { token }) => {
            return bookController.getBooks()
        },
        getBook: (_, { asin }, { token }) => {
            return bookController.getBook(asin)
        },
    },
    Mutation: {
        insertBook: (_, { asin, title, author, pages }, { token }) => {
            return bookController.saveBook(asin, title, author, pages)
        },
        updateBook: (_, { asin, title, author, pages }, { token }) => {
            return bookController.updateBook(asin, title, author, pages)
        },
        signIn: (_, { email, password }) => {
            return userController.getUserToken(email, password)
        },
        signUp: (_, { input: user }) => {
            return userController.saveUser(user)
        }
    }
}
