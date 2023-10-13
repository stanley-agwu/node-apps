const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)