import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';

import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const cors = Cors();

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

export default cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,OPTIONS,PATCH,DELETE,POST,PUT'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'authorization, X-CSRF-Token, X-Requested-With, Accept, X-Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    res.end();
    return false;
  }

  return gqlServer.createHandler({
    path: '/api/graphql/',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
