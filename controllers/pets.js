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

router.get("/" , async(req , res)=>{
    try{
        const pets = await Pet.find({});
        
        res.status(200).json({pets})
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"Failed to get pets"})
    }
})

router.get("/:id" , async(req,res)=>{
    try{
        // get the id from the req params
        const {id} = req.params

        //use the model to find by id
        const pet = await Pet.findById(id);

        // if we do not get a pet, response with 404
        if(!pet){
            res.status(404).json({error:"Pet not Found"})
        }
        //else 
            else{
                // send 200 with pet
                res.status(200).json({pet})

            }
        
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"Failed to get pets"})
    }
})

router.delete('/:id', async (req, res) => {
    try
    {
        const {id} = req.params;
        const pet = await Pet.findByIdAndDelete(id);
        res.status(200).json({message: "Deleted"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error: "failed to get pet"});
    }
});

// export the router
module.exports = router