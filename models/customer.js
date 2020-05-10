const mongoose = require("mongoose");

const customerSchema= new mongoose.Schema({
    accountName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: Number,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    accountOpenDate: {
        type: Date,
        required: true,
        default: Date.now

    }
})

module.exports=mongoose.model("customer", customerSchema)