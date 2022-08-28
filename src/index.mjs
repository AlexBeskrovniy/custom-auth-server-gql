import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import {
    ApolloServerPluginLandingPageLocalDefault
  } from "apollo-server-core";
import mongoose from 'mongoose';

import typeDefs from './types/user.mjs';
import { resolvers } from './resolvers/index.mjs';
import { User } from './models/index.mjs';

const apolloHeaders = (req, res, next) => {
    res.headers('Access-Control-Allow-Origin', "https://studio.apollographql.com");
    res.headers('Access-Control-Allow-Credentials', true);
    next();
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        return User;
    },
    // cors: {
    //     origin: ["https://www.your-app.example", "https://studio.apollographql.com"]
    //   },
    // plugins: [
    //     ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    // ]
});

//server.use(apolloHeaders);


//MongoDB Connection
mongoose
	.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.nhs5bd3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
		useUnifiedTopology: true, useNewUrlParser: true
	}) 
	.then( () => console.log('Mongo DB here!.'))
	.catch(err => console.log(err));

server.listen(process.env.PORT, () => {
	console.log(`Server has started on the Port: ${process.env.PORT}`);
});