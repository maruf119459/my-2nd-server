const express = require('express')
var cors = require('cors')
const friends = require('./friends.json')
const app = express()
const port = 4000;
app.use(cors())

app.get('/', (req,res)=>{
    res.send('Hello!')
})

app.get('/friends', (req,res)=>{
    res.send(friends)
})

app.get('/friends/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const friend = friends.find(friend => friend.id === id) || {};
    res.send(friend);
})

app.listen(port, ()=>{
    console.log(`Port Number: ${port}`)
})



/*

https://www.npmjs.com/package/nodemon
https://expressjs.com/
https://expressjs.com/en/resources/middleware/cors.html


*/