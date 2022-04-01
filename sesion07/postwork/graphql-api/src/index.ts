import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import { logger } from './logger'
import { resolvers } from './resolver'
import { typeDefs } from './schema'

new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        return {
            token: req.headers.authorization || ''
        }
    }
}).listen().then(({ url }) => {
    logger.info(`🚀  Servidor listo en ${url}, inicializado en ${process.env.NODE_ENV} a las ${new Date().toISOString()}`)
})
