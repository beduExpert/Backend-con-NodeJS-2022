const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    getAllBooks: [Book],
    getBook(asin:ID!): Book
  }
  type Book {
    asin: ID,
    title: String
    author: String
    pages: Int
  }
`

const resolvers = {
  Query: {
    getAllBooks: () => books,
    getBook: (_, { asin }) => {
      return books.find(e => e.asin == asin)
    },
  },
}

let books = [
  { asin: 'B00DQ845EA', title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', pages: 308 },
  { asin: 'B015NTIXWE', title: 'Ego Is the Enemy', author: 'Ryan Holiday', pages: 247 },
  { asin: 'B00ICN066A', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', pages: 469 },
]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})