const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./config/mongoose.config')

const JokesRoutes = require('./routes/joke.routes')
JokesRoutes(app)

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`)
})
