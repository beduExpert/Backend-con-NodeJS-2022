const { buildSchema } = require("graphql");

// construcción del schema con GraphQL Schema Language
const schema = buildSchema(`
  type Query {
    saludo: String,
    experto(id:ID!): Experto
  }
  type Experto {
    id: ID,
    nombre: String
    apellido: String
  }
`);

module.exports = { schema }