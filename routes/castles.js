var express=require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res){
  db.Castle.find()
    .then(function(castles){
      res.json(castles);
    })
      .catch(function(err){
        res.send(err);
      })
});

router.post("/", function(req, res){
  db.Castle.create(req.body)
  .then(function(newCastle){
    res.status(201).json(newCastle);
  })
  .catch(function(err){
    res.send(err)
  })
});

router.get("/:castleId", function(req, res){
  db.Castle.findById(req.params.castleId)
  .then(function(foundCastle){
    res.json(foundCastle);
  })
  .catch(function(err){
    res.send(err)
  })
});

router.put("/:castleId", function(req, res){
  db.Castle.findOneAndUpdate({_id: req.params.castleId}, req.body, {new: true})
  .then(function(castle){
    res.json(castle);
  })
  .catch(function(err){
    res.send(err)
  })
});

router.delete("/:castleId", function(req, res){
  db.Castle.remove({_id: req.params.castleId})
  .then(function(){
    res.json({message: "We deleted it!"})
  })
  .catch(function(err){
      res.send(err)
    })
  });





module.exports = router;
