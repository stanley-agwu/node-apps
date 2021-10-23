const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/db')
require('dotenv').config()
const notFound = require('./middleware/notFound')

// Middleware
app.use(express.json())
app.use(express.static('./public'))


// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)

const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server listening on Port ${port} ...`))
    } catch (err) {
        console.log(err)
    }
}

start()
