const Joke = require('../models/joke.models')


const getAllJokes = (req,res) => {
    Joke.find()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

const addJoke = (req,res) => {
    Joke.create(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

const getOneJoke = (req,res) => {
    Joke.findOne({_id: req.params._id})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

const updateJoke = (req,res) => {
    Joke.updateOne({_id: req.params._id}, req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

const deleteJoke = (req,res) => {
    Joke.deleteOne({_id:req.params._id})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    getAllJokes,
    addJoke,
    getOneJoke,
    updateJoke,
    deleteJoke
}