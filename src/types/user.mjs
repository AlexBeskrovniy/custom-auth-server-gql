import gql from 'apollo-server';

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        login: String!
        email: String!
        password: String!
        todos: [{
            id: ID!
            date: String!
            todo: String!
        }]! 
    }

    type Query {
        login()
        user()???????????????
    }
`;