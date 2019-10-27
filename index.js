var express=require("express");
var app = express();
var cors = require("cors");
// port =  8080
bodyParser = require("body-parser");
var cors = require("cors");


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Istvan:Depeche75@cluster0-5d6il.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to the atlas DB!');
}).catch(err => {
	console.log('ERROR:', err.message);
});

var PORT = 4000;
var PORT = process.env.PORT || 4000;


// port = 3000
// var port = process.env.PORT || 3000;


var castleRoutes = require("./routes/castles")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res)=>{
  res.send("Hello happy root!")
});

app.use(cors());
app.use("/castles", castleRoutes);

if(process.env.NODE_ENV === "production npm start") {
  app.use(express.static("client/build"))

// if(process.env.DB_CONNECTION === "production") {
//   app.use(express.static("client/build"))

app.get("*", (req, res)=> {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

// app.listen(port, function(){
// 	console.log("Server is listening!");
// })


app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));
