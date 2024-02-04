const express =require('express');
const app =express();

const path = require('path')  

app.set('view engine' , 'ejs'); //view engine ko set krdia hai taaki templates dekh paao
app.set('views' , path.join(__dirname , 'views')); //better

// ====================================================================================
app.get('/' , (req,res)=>{
    // res.send('HI')
    res.render('index');
} )

// ====================================================================================
app.get('/random' ,(req,res)=>{
    let num =Math.floor(Math.random()*100);
    res.render('random',{num});    // render ke sath sath kuch argument bhi bhej sakte hai jo ejs mein catch kr lenge
})

// =======================================================================================

const todos = ['go to gym' , 'go to club' , 'drink water'];

app.get('/my_todos' ,(req,res)=>{
    res.render('todos' , {todos} )
})

// ===============================================================
app.listen(8080,()=>{
    console.log("server connected on port 8080");
})