import { ApolloError } from "apollo-server-errors";
import { sequelize } from "../db";

export class BookController {

    async getBooks() {
        return await sequelize.models.Book.findAll()
    }

    async getBook(asin: string) {
        return await sequelize.models.Book.findOne({
            where: { asin }
        })
    }

    async saveBook(asin: string, title: string, author: string, pages: number) {
        return await sequelize.models.Book.create({ asin, title, author, pages })
    }

    async updateBook(asin: string, title: string, author: string, pages: number) {
        const book = await sequelize.models.Book.findOne({
            where: { asin }
        })
        if (book) {
            await sequelize.models.Book.update({ asin, title, author, pages }, {
                where: { asin }
            })
            return await sequelize.models.Book.findOne({ where: { asin } })
        } else {
            throw new ApolloError('Book not found', 'ERR003')
        }
    }

}
