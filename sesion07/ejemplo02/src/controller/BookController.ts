import { ApolloError } from "apollo-server-errors";
import { sequelize } from "../db";

export class BookController {

    async saveBook(asin: string, title: string, author: string, pages: number) {
        return await sequelize.models.Book.create({ asin, title, author, pages })
    }

}
