// require express
const express = require("express")

// require the model
const Pet = require("../models/pet")


// initialize the router
const router = express.Router()

// POST + /pets/
router.post("/" , async (req , res)=>{
res.json(req.body);
})

// export the router
module.exports = router