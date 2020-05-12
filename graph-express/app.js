const express = require('express');
const expressGraph = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const MessageSchema = buildSchema(`
    type Query {
        message: String
    }
`);

const schemaRoot = {
    message: () => 'Hello from GraphQL by School of net'
};

app.use('/graphql', expressGraph({
    schema: MessageSchema,
    rootValue: schemaRoot,
    graphiql: true
}));

app.listen(3000, () => console.log('Express GraphQL has been started...'));