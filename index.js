var express=require("express");
var app = express();
var cors = require("cors");
// port =  8080
bodyParser = require("body-parser");
var cors = require("cors");
var path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Istvan:depeche@clusteradvfurnit-m2yvl.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to the atlas DB_ADV!');
}).catch(err => {
	console.log('ERROR:', err.message);
});

var PORT = 4000;
var PORT = process.env.PORT || 4000;


// port = 3000
// var port = process.env.PORT || 3000;


var furniturRoutes = require("./routes/furniturs")

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use("/furniturs", furniturRoutes);
app.get("/furniturs", furniturRoutes);

app.get("/", (req, res)=>{
  res.send("Hello happy root!")
});


if(process.env.NODE_ENV === "production") {
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
