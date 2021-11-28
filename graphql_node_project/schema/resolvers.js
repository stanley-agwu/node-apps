const { UsersList, MoviesList } = require('../FakeData')
const _ = require('lodash')

const resolvers = {
    Query: {
        users: () => {
            return UsersList;
        },
        user: (parent, args) => {
            const id = args.id;
            return _.find(UsersList, { id: Number(id) });
        },
        movies: () => {
            return MoviesList
        },
        movie: (parent, args) => {
            const name = args.name
            return _.find(MoviesList, { name })
        }
    },
    User: {
        favouriteMovies: () => {
            return _.filter(MoviesList, (movie) => {
                return movie.yearOfRelease >= 2013 && movie.yearOfRelease <= 2016
            })
        }
    }
};

module.exports = { resolvers }