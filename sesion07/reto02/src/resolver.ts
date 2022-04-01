import { AuthController } from "./controller/AuthAPI"
import { BookController } from "./controller/BookController"
import { UserController } from "./controller/UserController"

const bookController = new BookController()
const userController = new UserController()
const authController = new AuthController()

export const resolvers = {
    Query: {
        getAllBooks: (_, __, { token }) => {
            return authController.verifyToken(token)
                && bookController.getBooks()
        },
        getBook: (_, { asin }, { token }) => {
            return authController.verifyToken(token)
                && bookController.getBook(asin)
        }
    },
    Mutation: {
        insertBook: (_, { asin, title, author, pages }, { token }) => {
            return authController.verifyToken(token)
                && bookController.saveBook(asin, title, author, pages)
        },
        updateBook: (_, { asin, title, author, pages }, { token }) => {
            return authController.verifyToken(token)
                && bookController.updateBook(asin, title, author, pages)
        },
        signUp: (_, { input: user }) => {
            return userController.saveUser(user)
        },
        signIn: (_, { email, password }) => {
            return userController.getUserToken(email, password)
        }
    }
}
