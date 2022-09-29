const JokeController = require('../controllers/joke.controllers')
const {getAllJokes, addJoke, getOneJoke, updateJoke, deleteJoke} = JokeController

module.exports = (app) => {
    app.get('/api/jokes', getAllJokes)
    app.post('/api/jokes', addJoke)
    app.get('/api/jokes/:_id', getOneJoke)
    app.put('/api/jokes/:_id', updateJoke)
    app.delete('/api/jokes/:_id', deleteJoke)
}
