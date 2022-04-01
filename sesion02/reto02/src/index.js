const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { resolver } = require('./resolver');
const { schema } = require('./schema');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');