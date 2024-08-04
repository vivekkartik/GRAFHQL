const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { resolvers } = require("./resolver.js");
const { typeDefs } = require("./models/typeDefs.js");
const mongoose = require('mongoose')
const MONGO_URL ='mongodb://localhost:27017/graphql'
const server = new ApolloServer({ typeDefs, resolvers });


mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('DB conencted');
    })
    .catch(err =>{
        console.log(err);
    })
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});