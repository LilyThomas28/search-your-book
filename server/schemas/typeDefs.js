const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        description: String!
        bookId: String!
        title: String!
        authors: [String]!
        image: String
        link: String
    }
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me(userId: ID): User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        removeBook(bookId: String!): User
        saveBook(authors: [String]!, description: String!, title: String!, bookId: String!, image: String!, link: String!): User
        addUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;