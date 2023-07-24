const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./src/schema/TypeDef')
const {Query} = require('./src/schema/Query')
const {Mutation} = require('./src/schema/Mutation')
async function startServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers:{
    Query,
    Mutation,
  }});

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});
