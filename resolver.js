
const users = require('./models/users')
const resolvers = {
    Query: {
        greetings: ()=> "graphQl is awesome",
        addNumber: (parent,args)=>{
            return args.a + args.b
        },
        yourData: (parent, args)=>{
            return `hello ${args.name} welcome the graphql learning , Thanks for detail 1. Name = ${args.name} 2.Age = ${args.age} 3.phone number = ${ args.phoneNumber}`
        },
        getAllUsers: async ()=>{
            var allusers = await users.find({});
            return allusers
        },
        getUserByName: async (parent,args)=>{
            var userWithName = await users.find({username: args.name});
            return userWithName
        }
    },
    Mutation: {
        addUser: async (parent, args)=>{
            var {name, username, password} = args
            var user = new users({name, username, password})
            
            var addedUser = await user.save()
            return addedUser
        }

    }
};

module.exports = { resolvers}

//here after takeing args what should we do 