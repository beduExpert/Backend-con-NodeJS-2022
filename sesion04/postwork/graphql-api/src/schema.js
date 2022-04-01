import { gql } from 'apollo-server'

export const typeDefs = gql`

  type Query {
    getAllLives: [Live],
    getLive(id:ID!): Live
  }

  type Live {
    id: ID,
    title: String
    subtitle: String
    date: String
    time: String
    mode: String
    img: String
  }

`