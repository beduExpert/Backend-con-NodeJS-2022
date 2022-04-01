import { sequelize } from "./db"

export const resolvers = {
    Query: {
        getAllBooks: async () => await sequelize.models.Book.findAll(),
        getBook: async (_, { asin }) => {
            return await sequelize.models.Book.findOne({
                where: { asin } // es una notación corta de where: { asin: asin }
            })
        }
    },
    Mutation: {
        insertBook: async (_, { asin, title, author, pages }) => {
            return await sequelize.models.Book.create({ asin, title, author, pages })
        }
    }
}
