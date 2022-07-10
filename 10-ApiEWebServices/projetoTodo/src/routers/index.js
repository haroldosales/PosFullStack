const express = require("express");

const router =  express.Router();



router.get("/", (req, res) =>{
    console.log("Ola");
    res.send(" ei")
});

module.exports = router;