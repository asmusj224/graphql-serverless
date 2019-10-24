const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (name: String) => `Hello ${name}`
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
