const { UsersList, MoviesList } = require('../FakeData')
const _ = require('lodash')

const resolvers = {
    Query: {
        // USER RESOLVERS
        users: () => {
            return UsersList;
        },
        user: (parent, args) => {
            const id = args.id;
            return _.find(UsersList, { id: Number(id) });
        },
        // MOVIE RESOLVERS
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
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastId = UsersList[UsersList.length - 1].id
            user.id = lastId + 1
            console.log(user)
            UsersList.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const {id, newUsername} = args.input
            let updatedUser;
            UsersList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername
                    updatedUser = user
                }
                
            })
            console.log(updatedUser)
            return updatedUser
        },
        deleteUser: (parent, args) => {
            const {id} = args
            _.remove(UsersList, (user) => user.id === Number(id));
            console.log(UsersList)
            return null
        }
    }
};

module.exports = { resolvers }