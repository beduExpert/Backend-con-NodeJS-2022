import { ApolloError } from "apollo-server-errors";
import { logger } from "./logger";

export const resolvers = {
    Query: {
        getAllBooks: () => books,
        getBook: (_, { asin }) => {
            return books.find(e => e.asin == asin)
        },
    },
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
}

let books = [
    { asin: 'B00DQ845EA', title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', pages: 308 },
    { asin: 'B015NTIXWE', title: 'Ego Is the Enemy', author: 'Ryan Holiday', pages: 247 },
    { asin: 'B00ICN066A', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', pages: 469 },
]