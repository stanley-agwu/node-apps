const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favouriteMovies: [Movie]
    }
    type Movie {
        id: ID!
        name: String!
        yearOfRelease: Int!
        isInCinemas: Boolean!
    }
    type Query {
        users: [User!]! 
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): Movie
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = NIGERIA
    }
    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }
    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!): User
        deleteUser(id: ID!): User
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