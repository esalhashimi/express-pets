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


// get + /pets
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

//get + /pets/id
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

// Delete + /pets/id
router.delete('/:id', async (req, res) => {
    try
    {
        //get the id from params
        const {id} = req.params;

        // try to find and delete the pet using the id
        const pet = await Pet.findByIdAndDelete(id);

        // if there is no pet send 404
        if(!pet){
            res.status(404).json({error:"Pet not Found"})
        }

        //else
            else{
                // send back massege to say deleted
                res.status(200).json({message: "Deleted"});

            }
        
       
        
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error: "failed to get pet"});
    }
});

//
router.put

// export the router
module.exports = router