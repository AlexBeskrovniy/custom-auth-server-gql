import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import mongoose from 'mongoose';

import typeDefs from './types.mjs';
import { resolvers } from './resolvers.mjs';
import { User } from './models/index.mjs';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
        req,
        res,
        User,
      }),
    // csrfPrevention: true,
    // cache: 'bounded',
    // plugins: [
    //     ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    // ]
});


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