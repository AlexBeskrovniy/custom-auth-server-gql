import { gql } from 'apollo-server';

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        login: String!
        email: String!
        password: String!
        todos: [Todo]!
        token: String
    }

    type Todo {
        id: ID!
        date: String!
        todo: String!
    }

    input LoginInput{
        email: String!
        password: String!
    }

    input AuthInput {
        id: ID!
        token: String!
    }

    input NewUserInput {
        name: String!
        login: String!
        email: String!
        password: String!
    }

    input NewTodoInput {
        user_id: ID!
        date: String!
        todo: String!
    }

    type Query {
        login(input: LoginInput): User!
        auth(input: AuthInput): User!
    }

    type Mutation {
        newUser(input: NewUserInput): User
        loginUser(input: LoginInput): User!
    }
`; 
// You need create Auth type

export default typeDefs;