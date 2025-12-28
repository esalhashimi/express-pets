// require express
const express = require("express")

// require the model
const Pet = require("../models/pet")


// initialize the router
const router = express.Router()

// POST + /pets/
router.post("/" , async (req , res)=>{
    try{
        //use the model to insert the data into db
        const pet = await Pet.create(req.body)

        // respond with the new pet data
        res.status(201).json({pet})
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"failed to create pet"});
    }
})

// export the router
module.exports = router