const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String
    goodbye: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    goodbye: () => 'Goodbye!'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
