require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/db');
const path = require('path')
const app = express()
const cors = require('cors')

connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use('/api/user', require('./routes/user.routes'))
app.use('/api/category', require('./routes/category.routes'))
app.use('/api/post', require('./routes/post.routes'))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}



app.listen(process.env.PORT ,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})