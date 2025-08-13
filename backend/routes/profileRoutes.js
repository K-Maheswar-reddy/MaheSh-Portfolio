
const express = require('express');
const Profile = require('../models/Profile.js');
const router = express.Router();

// Get route for homepage
router.get('/', async(req,res) => {
    try{
        const profile = await Profile.find(); // fetch all data from collection
        console.log('profile data' + profile)
        res.json(profile); // send json response
    } catch (err){
        console.log('error fetching profile data:'+ err);
        res.status(500).json({ error: "failed to fetch data"}) // return error to client
    }
})

/*
// post an data to atlas
router.delete('/', async(req,res)=>{
    try{
        const newData = new Profile(req.body);
        await newData.save();
        res.status(201).json(newData) 
        console.log("data created" + newData)
    } catch (err){
        res.status(500).json({ error: " failed to post data"});
    }
})*/

module.exports = router