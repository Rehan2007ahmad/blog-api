require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/db');
const app = express()
const cors = require('cors')

connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.get('/', (req,res)=>{
    res.send("hello World")
})


app.use('/api/user', require('./routes/user.routes'))
app.use('/api/category', require('./routes/category.routes'))
app.use('/api/role', require('./routes/role.routes'))
app.use('/api/post', require('./routes/post.routes'))

app.listen(process.env.PORT ,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
