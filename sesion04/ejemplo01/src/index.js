const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`

const resolvers = {
    Query: {
        helloWorld: () => 'Hello World'
    },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})