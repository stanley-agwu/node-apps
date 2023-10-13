

class CustomErrorHandler extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const customErrorFunction = (msg, statusCode) => {
    return new CustomErrorHandler(msg, statusCode)
}

module.exports = {
    CustomErrorHandler,
    customErrorFunction
}