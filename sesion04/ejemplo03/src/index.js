import 'dotenv/config'
import { logger } from "./logger";
import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolver'
import { typeDefs } from './schema'

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  logger.info(`🚀  Servidor listo en ${url}, inicializado en ${process.env.NODE_ENV} a las ${new Date().toISOString()}`)
})