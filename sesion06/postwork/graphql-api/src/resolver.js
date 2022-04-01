import { ApolloError, AuthenticationError } from "apollo-server-errors"
import { compare, hash } from "bcrypt"
import { sign } from "jsonwebtoken"
import { verifyToken } from "./auth"
import { sequelize } from "./db"
import { logger } from "./logger"

const SALT_ROUNDS = 10

export const resolvers = {
    Query: {

        getAllLives: async (_, __, { token }) => verifyToken(token) && await sequelize.models.Live.findAll(),

        getLive: async (_, { id }, { token }) => {
            verifyToken(token)
            return await sequelize.models.Live.findOne({
                where: { id }
            })
        }
    },
    Mutation: {

        insertLive: async (_, { id, title, subtitle, date, time, mode, img }, { token }) => {
            return verifyToken(token) && await sequelize.models.Live.create({ id, title, subtitle, date, time, mode, img })
        },

        updateLive: async (_, { id, title, subtitle, date, time, mode, img }, { token }) => {
            verifyToken(token)
            const live = await sequelize.models.Live.findOne({
                where: { id }
            })
            if (live) {
                await sequelize.models.Live.update({ title, subtitle, date, time, mode, img }, {
                    where: { id }
                })
                return await sequelize.models.Live.findOne({ where: { id } })
            } else {
                throw new ApolloError('Live not found', 'ERR003')
            }
        },

        signUp: async (_, { input: user }) => {
            user.password = await hash(user.password, SALT_ROUNDS)
            return await sequelize.models.User.create({ ...user })
        },

        signIn: async (_, { email, password }) => {
            const user = await sequelize.models.User.findOne({ where: { email } })
            if (user && await compare(password, user.password)) {
                const tokenData = {
                    fullName: user.name + ' ' + user.lastname,
                    email,
                    isAdmin: user.isAdmin
                }
                logger.info(`[signIn] El usuario ${user.id} a accedido al sistema`)
                return sign(tokenData, process.env.JWT_SECRET, { expiresIn: 180 })
            } else {
                logger.error(`[signIn] Credenciales inválidas para ${email}`)
                throw new AuthenticationError('Invalid credentials')
            }
        }
    }
}