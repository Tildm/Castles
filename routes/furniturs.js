var express=require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res){
  db.Furnitur.find()
    .then(function(furniturs){
      res.json(furniturs);
    })
      .catch(function(err){
        res.send(err);
      })
});


router.post("/", function(req, res){
  db.Furnitur.create(req.body)
  .then(function(newFurnitur){
    res.status(201).json(newFurnitur);
  })
  .catch(function(err){
    res.send(err)
  })
});

router.get("/:furniturId", function(req, res){
  db.Furnitur.findById(req.params.furniturId)
  .then(function(foundFurnitur){
    res.json(foundFurnitur);
  })
  .catch(function(err){
    res.send(err)
  })
});

router.put("/:furniturId", function(req, res){
  db.Furnitur.findOneAndUpdate({_id: req.params.furniturId}, req.body, {new: true})
  .then(function(furnitur){
    res.json(furnitur);
  })
  .catch(function(err){
    res.send(err)
  })
});

router.delete("/:furniturId", function(req, res){
  db.Furnitur.remove({_id: req.params.furniturId})
  .then(function(){
    res.json({message: "We deleted it!"})
  })
  .catch(function(err){
      res.send(err)
    })
  });





module.exports = router;
