const express = require('express')

const app = express();

//ROUTES

app.get('/', (req, res) => {
    res.send('We are on Home')
})


//How we start listening to the server 
app.listen(3000, () => {
    console.log('server is up and running')
})