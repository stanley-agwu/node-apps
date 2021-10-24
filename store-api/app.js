require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

const connectDB = require('./db/db')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/notFound')
const errorMiddleware = require('./middleware/errorHandler')

// middlewares
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products routes</a>')
})

app.use('/api/v1/products', productsRouter)

// products routes


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on PORT ${port} ...`))
    } catch (error) {
        console.log(error)
    }
}

start()