const express = require('express');
const app = express();

const PORT = 6000
let page = ""

app.get('/',(req,res)=>{
    page = "homepage"
    return res.json({page:page})
})

app.post('/',(req,res)=>{
    page = "POST homepag1"
    return res.json({page:page})
})

app.post('/user',(req,res)=>{
    page = "GET a user"
    return res.json({page:page})
})

app.post('/user',(req,res)=>{
    page = "uesrs page (POST)"
    return res.json({page:page})
})



app.listen(PORT, () => {
    `Server is live at port ${PORT}`
})