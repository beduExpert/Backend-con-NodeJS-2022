const { buildSchema } = require("graphql");

// construcción del schema con GraphQL Schema Language
const schema = buildSchema(`
  type Book {
    asin: ID,
    title: String
    author: String
    pages: Int
  }
  type Query {
    getAllBooks: [Book],
    getBook(asin:ID!): Book
  }
`);

module.exports = { schema }