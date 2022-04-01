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
