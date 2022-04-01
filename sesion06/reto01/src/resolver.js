import { ApolloError } from "apollo-server-errors"
import { sequelize } from "./db"
import { hash } from 'bcrypt'

const SALT_ROUNDS = 10

export const resolvers = {
    Query: {
        getAllBooks: async () => await sequelize.models.Book.findAll(),
        getBook: async (_, { asin }) => {
            const book = await sequelize.models.Book.findOne({
                where: { asin } // es una notación corta de where: { asin: asin }
            })
            console.log(book);
            return book
        },
    },
    Mutation: {
        insertBook: async (_, { asin, title, author, pages }) => {
            return await sequelize.models.Book.create({ asin, title, author, pages })
        },
        updateBook: async (_, { asin, title, author, pages }) => {
            // buscamos si existe el libro solicitado
            const book = await sequelize.models.Book.findOne({
                where: { asin } // es una notación corta de where: { asin: asin }
            })
            // si existe procedemos a actualizar
            if (book) {
                await sequelize.models.Book.update({ asin, title, author, pages }, {
                    where: { asin } // es una notación corta de where: { asin: asin }
                })
                // regresamos el libro reciéntemente actualizado
                return await sequelize.models.Book.findOne({ where: { asin } })
            }
            // en caso contrario, lanzamos mensaje y código de error
            else {
                throw new ApolloError('Book not found', 'ERR003')
            }
        },
        signUp: async (_, { input: user }) => {
            user.password = await hash(user.password, SALT_ROUNDS)
            return await sequelize.models.User.create({ ...user })
        }
    }
}
