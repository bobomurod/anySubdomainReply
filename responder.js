const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.json({
        message: "hello"
    })
})

app.listen(3000);