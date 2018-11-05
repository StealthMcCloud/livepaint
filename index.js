const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

let updates = [];

// Fill in your request handlers here

app.post("/updates", function (req, res){
    if(req.body.clientUpdates.length > 0) {
        req.body.clientUpdates.forEach(update => updates.push(update))
    }
    newUpdates = updates.slice(req.body.lengthOfLastServerUpdate)
    res.send({
        "serverUpdates": newUpdates
    });
})

app.listen(port, () => console.log("Server running on Port 3000"))