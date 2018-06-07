const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment');
//const config = require("./config");
//const Twit = require("twit");
//const T = new Twit(config)

app.set("view engine", "pug");
app.use(express.static("public")) //app.use("/static", express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))

const routes = require("./routes/index")
app.use(routes)

app.listen(3000, ()=>{
  console.log("Twitter app listening on port 3000");
})
