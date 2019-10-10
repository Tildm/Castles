var express=require("express");
var app = express();
port =  8080
bodyParser = require("body-parser");

var castleRoutes = require("./routes/castles")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
  res.send("Hello happy root!")
});

app.use("/castles", castleRoutes);

app.listen(port, function(){
	console.log("Server is listening!");
})
