const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    hello(nombre:String!): String
  }
`

const resolvers = {
  Query: {
    hello: (_, { nombre }) => `Hello ${nombre}`
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})