import { sequelize } from "./db"

export const resolvers = {
    Query: {
        getAllBooks: async () => await sequelize.models.Book.findAll(),
        getBook: (_, { asin }) => {
            return books.find(e => e.asin == asin)
        },
    },
}
