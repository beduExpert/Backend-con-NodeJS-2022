import { ApolloError } from 'apollo-server-errors'
import Book from '../db/model/Book'

export class BookController {

    async getBooks() {
        return await Book.findAll()
    }

    async getBook(asin: string) {
        return await Book.findOne({
            where: { asin }
        })
    }

    async saveBook(asin: string, title: string, author: string, pages: number) {
        return await Book.create({ asin, title, author, pages })
    }

    async updateBook(asin: string, title: string, author: string, pages: number) {
        const book = await Book.findOne({
            where: { asin }
        })
        if (book) {
            await Book.update({ asin, title, author, pages }, {
                where: { asin }
            })
            return await Book.findOne({ where: { asin } })
        } else {
            throw new ApolloError('Book not found', 'ERR003')
        }
    }

}
