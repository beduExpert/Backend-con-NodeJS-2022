import { ApolloError, AuthenticationError } from "apollo-server-errors"
import { sequelize } from "./db"
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { logger } from "./logger"
import { verifyToken } from "./auth"

const SALT_ROUNDS = 10

export const resolvers = {
    Query: {
        getAllBooks: async (_, __, { token }) => verifyToken(token) && await sequelize.models.Book.findAll(),
        getBook: async (_, { asin }, { token }) => {
            // verificación de token
            verifyToken(token)
            // consulta de books
            const book = await sequelize.models.Book.findOne({
                where: { asin }
            })
            return book
        }
    },
    Mutation: {
        insertBook: async (_, { asin, title, author, pages }, { token }) => {
            return verifyToken(token) && await sequelize.models.Book.create({ asin, title, author, pages })
        },
        updateBook: async (_, { asin, title, author, pages }, { token }) => {
            // verificación de token
            verifyToken(token)
            // actualización de libro
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
        },
        signUp: async (_, { input: user }) => {
            user.password = await hash(user.password, SALT_ROUNDS)
            return await sequelize.models.User.create({ ...user })
        },
        signIn: async (_, { email, password }) => {
            // buscamos al usuario en la BD
            const user = await sequelize.models.User.findOne({ where: { email } })
            // verificamos que el usuario no sea nulo y que el password 
            if (user && await compare(password, user.password)) {
                // generamos los datos para el payload del JWT
                const tokenData = {
                    fullName: user.name + ' ' + user.lastname,
                    email,
                    isAdmin: user.isAdmin
                }
                logger.info(`[signIn] El usuario ${user.id} a accedido al sistema`)
                // generamos el JWT y lo regresamos
                return sign(tokenData, process.env.JWT_SECRET, { expiresIn: 180 }) // expira en 3'
            } else {
                logger.error(`[signIn] Credenciales inválidas para ${email}`) // por seguridad no loggeamos el password
                throw new AuthenticationError('Invalid credentials')
            }
        }
    }
}
