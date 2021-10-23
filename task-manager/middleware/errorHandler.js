const { CustomErrorHandler } = require('../errors/customErrorHandler')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomErrorHandler){
        return res.status(err.status).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware