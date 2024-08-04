const gql = require("graphql-tag");


const typeDefs = gql`
scalar BigInt
  type Query {
    greetings: String
    addNumber(a:Int, b:Int):Int
    yourData(name: String, age: Int, phoneNumber: String): String
    getAllUsers:[users]
    getUserByName(name: String):[ users]
  }
  type users{
    name: String,
    username:String,
    password: String
  }
  type Mutation{
    addUser(name: String!, username: String, password: String): users
  }
`;

module.exports = { typeDefs };
//here first the query comes and check is that parameter are there are not and go to resolver files