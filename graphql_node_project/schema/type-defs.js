const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        users
        friends
        
    }
`