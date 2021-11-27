const { UsersList } = require('../FakeData')

const resolvers = {
    Query: {
        users() {
            return UsersList;
        },
    },
};

module.exports = { resolvers }