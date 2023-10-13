const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose
        .connect(url)
        .then(() => console.log('Connected to db ...'))
}

module.exports = connectDB


//Used as an optional variable to connect for mongoose versions less than 6.0.0
// {
//     useNewUrlParser: true,
//     UseCreateIndex: true,
//     UseFindAndModify: false,
//     UseUnifiedTopology: true
// }