// GLOBAL IMPORT START
import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

import passport from 'passport';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import dotenv from 'dotenv';
// GLOBAL IMPORT END


// STRIC LOCAL IMPORT START
import { typeDefs } from "./graphql.query";
import  GQLresolver  from "./graphql.resolver";
import HandlerGenerator from "./login/login";
import checkToken from "./login/middleware";

// STRIC LOCAL IMPORT END


const App =async () =>{
  let resolvers:any = await GQLresolver();
  
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: { endpoint: "/api" }
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ // Middleware
  extended: true
}));

app.use(bodyParser.json());
let handlers = new HandlerGenerator();
await app.post('/login',handlers.login);
await app.get("/gettoken", checkToken, handlers.index);
server.applyMiddleware({ app, path: "/api" });
const port = process.env.PORT || 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at ${server.graphqlPath}`)
);

}
App();


export default App;


