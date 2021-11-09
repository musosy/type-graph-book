import 'reflect-metadata';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import BookResolver from './resolvers/Book.resolver';
import AuthorResolver from './resolvers/Author.resolver';

dotenv.config();
const USER     = process.env.USR;
const PASSWORD = process.env.PWD;
const DB_NAME  = process.env.DB_NAME; 

(async _ => {
    try {
        await mongoose.connect(
            `mongodb+srv://${USER}:${PASSWORD}@${DB_NAME}.l3n4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
                autoIndex: true
        });
        console.log("Connected to database");
    } catch(err) {
        console.log(err)
    }
    try {
        const schema = await buildSchema({
            resolvers: [BookResolver, AuthorResolver],
            emitSchemaFile: true
        })
        const server = new ApolloServer({
            schema
        })
        const { url } = await server.listen(3000);
        console.log(`Server listening on port 3000. Playground at ${url}`)
    } catch(err) {
        console.log(err)
    }
})();