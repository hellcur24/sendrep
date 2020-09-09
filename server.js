const express = require('express');
const app = express();

app.get("/",function(request,response){
    //console.log(request);
    response.send('<h1>Hello World!</h1>');
});
app.get("/about",function(req,res){
    res.send('<h1>UwU</h1>');
});
app.get("/email",function(req,res){
    res.send('email: Dmitri@gmail.com');
});

app.listen(3000,function(){
    console.log("Server is running on Port 3000.");
});