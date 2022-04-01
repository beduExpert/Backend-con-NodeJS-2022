import { gql } from 'apollo-server'

export const typeDefs = gql`

  type Query {
    getAllBooks: [Book],
    getBook(asin:ID!): Book
  }

  type Mutation {
    insertBook(asin:ID!,title:String!, author:String!, pages:Int!): Book
  }

  type Book {
    asin: ID,
    title: String
    author: String
    pages: Int
  }

`