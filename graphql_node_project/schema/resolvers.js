const { UsersList } = require('../FakeData')
const _ = require('lodash')

const resolvers = {
    Query: {
        users: () => {
            return UsersList;
        },
        user: (parent, args) => {
            const id = args.id;
            return _.find(UsersList, { id: Number(id) });
        }
    },
};

module.exports = { resolvers }