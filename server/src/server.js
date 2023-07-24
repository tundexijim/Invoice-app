const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema/TypeDef')
const {Query} = require('./schema/Query')
const {Mutation} = require('./schema/Mutation')
async function startServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers:{
    Query,
    Mutation,
  }});

  await server.start();

  server.applyMiddleware({path:"graphql", app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});
