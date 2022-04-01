import { gql } from 'apollo-server'

export const typeDefs = gql`

  type Query {
    getAllBooks: [Book],
    getBook(asin:ID!): Book
    signIn(email:String!, password:String!): String
  }

  type Mutation {
    insertBook(asin:ID!, title:String!, author:String!, pages:Int!): Book,
    updateBook( asin:ID!, title:String, author:String, pages:Int): Book,
    signUp(input: UserInput): User
  }

  type Book {
    asin: ID
    title: String
    author: String
    pages: Int
  }

  type User {
    id: Int
    name: String
    lastname: String
    email: String
    isAdmin: Boolean
  }

  input UserInput {
    name: String
    lastname: String
    email: String!
    password: String!
    isAdmin: Boolean
  }

`