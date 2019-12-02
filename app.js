const express=require('express');
//const bodyparser=require('body-parser');

//var bookRouter=require('./src/router/bookrouter')
var app=express();

// app.use(bodyparser.urlencoded({extended:true}));

// app.set('views','./src/views');
// app.set('view engine','ejs');

// app.use("/book",bookRouter);

app.get("/",function(req,res)
{
 res.send("welcome");
});

const port=process.env.PORT || 3000
app.listen(3000,function(){
    console.log("port 3000 is using");
});