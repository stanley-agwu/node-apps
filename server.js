const express = require("express")
const mongoose = require ("mongoose")
require("dotenv").config();

const app=express()

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true });
const db= mongoose.connection;
db.on("error", (error)=> console.error(error));
db.once("open", ()=> console.log("Connected to Database"));

app.use(express.json())

const customersRouter= require("./routes/customers")
app.use("/customers", customersRouter)

const port=3000;
app.listen(port, ()=>{
   console.log(`Server started on port ${port}`)
})