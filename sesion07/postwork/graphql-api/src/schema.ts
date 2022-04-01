import { gql } from 'apollo-server'

export const typeDefs = gql`

  type Query {
    getAllLives: [Live],
    getLive(id:ID!): Live
  }

  type Mutation {
    insertLive(
      id:ID!,
      title:String!,
      subtitle:String,
      date:String!,
      time:String!,
      mode:String!,
      img:String!
    ): Live,

    updateLive(
      id:ID!,
      title:String,
      subtitle:String,
      date:String,
      time:String,
      mode:String,
      img:String
    ): Live
    
    signIn(email:String!, password:String!): String
    signUp(input: UserInput): User
  }

  type Live {
    id: ID
    title: String
    subtitle: String
    date: String
    time: String
    mode: String
    img: String
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