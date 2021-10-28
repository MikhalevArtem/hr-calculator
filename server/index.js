const express = require('express');
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const root = require('./graphql/root')
const app = express();

app.use(
    cors({
        origin: '*',
    })
);

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(5000, () => {
    console.log('Server started on port 5000');
})