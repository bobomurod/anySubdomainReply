const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Subdomain' + req.headers['x-subdomain'])
});

app.listen(3000, function(){
    console.log("listning 3000");
});