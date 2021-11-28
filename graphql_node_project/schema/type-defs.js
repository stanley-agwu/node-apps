const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
    }
    type Query {
        users: [User!]! 
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String): Movie
    }

    enum Nationality {
        UNITED_STATES
        UNITED_KINGDOM
        ARGENTINA
        CANADA 
        NIGERIA
        GHANA
        GERMANY
        POLAND
        ANTIGUA
        MEXICO
        JAPAN
        CHINA
        INDIA
        CAMEROON
        BRAZIL
        SPAIN
        IRELAND
        NORWAY
        DENMARK
    }
`;

module.exports = { typeDefs };