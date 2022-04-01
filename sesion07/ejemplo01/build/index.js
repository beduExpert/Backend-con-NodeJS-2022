"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const apollo_server_1 = require("apollo-server");
const logger_1 = require("./logger");
const resolver_1 = require("./resolver");
const schema_1 = require("./schema");
new apollo_server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolver_1.resolvers
}).listen().then(({ url }) => {
    logger_1.logger.info(`🚀  Servidor listo en ${url}, inicializado en ${process.env.NODE_ENV} a las ${new Date().toISOString()}`);
});
