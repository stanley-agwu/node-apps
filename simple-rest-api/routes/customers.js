const express = require("express")
const router=express.Router()
const Customer=require("../models/customer")

//Getting all
router.get("/", async (req, res)=>{
    try {
        const customers= await Customer.find()
        res.json(customers)
    } catch (err){
        res.status(500).json({message: err.message})
    }  
})

//Getting one
router.get("/:id", getCustomer, (req, res)=>{
    res.send(res.customer.accountName)
})

//Creating one
router.post("/", async (req, res)=>{
    const customer = new Customer({
        accountName: req.body.accountName,
        accountNumber: req.body.accountNumber,
        accountType: req.body.accountType
    })
    try{
        const newCustomer= await customer.save()
        res.status(201).json(newCustomer)

    } catch (err) {
        res.status(400).json({message: err.message})

    }
})
//Updating one
router.patch("/:id", getCustomer, async (req, res)=>{
    if (req.body.accountName != null){
        res.customer.accountName = req.body.accountName
    }
    if (req.body.accountNumber != null){
        res.customer.accountNumber = req.body.accountNumber
    }
    if (req.body.accountType != null){
        res.customer.accountType = req.body.accountType
    }
    try{
        const updatedCustomer = await res.customer.save()
        res.json(updatedCustomer)
    } catch (err){
        res.status(400).json({message: err.message})
    }
})
//Deleting one
router.delete("/:id", getCustomer, async (req, res)=>{
    try{
        await res.customer.remove()
        res.json({message: "Deleted customer's account"})

    } catch (err){
        res.status(500).json({message: err.message})

    }
})

//A Middleware
async function getCustomer(req, res, next){
    let customer
    try{
        customer= await Customer.findById(req.params.id)
        if (customer==null){
            return res.status(404).json({message: "Cannot find customer in Database"})
        }
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    res.customer=customer
    next();
    
}
module.exports=router