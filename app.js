const express=require("express");
const app=express()
const PORT = process.env.PORT || 5000;
const db = require('./db.js');
app.use(express.json());
const itemsRouter=require("./routes/itemRoute");


app.use("/item",itemsRouter);

app.get('/', (req, res) => res.send('<h1>Hello Express</h1>'));


db.sync({ force: false })
  .then(() => {
    app.listen(PORT, console.log('Server is running on port: ' + PORT));
  });