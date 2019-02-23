var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//FIND AND LIST ALL BURGERS
router.get("/", function(req, res) {

  burger.findAll({}).then(function(data) {
    var burgerObject = {
           burgers: data
         };
    res.render("index", burgerObject);
    //res.json(results); this 
  });


});

//CREATE NEW BURGER
router.post("/api/burgers",function(req,res){

    burger.create({  
      burger_name: req.body.burger_name,
      consumed: req.body.consumed
    })
    .then(newBurger => {
      res.redirect("/");
      console.log(`New burger ${newBurger.burger_name}, with id ${newBurger.id} has been created.`);
    });

})

//UPDATE BURGER STATUS TO EATEN
router.put("/api/burgers/:id", function(req,res){

    var id = req.params.id;
    var status = req.body.status;
    
    burger.findByPk(id)
    .then(foundBurger => {
      console.log(`Found burger ${foundBurger.burger_name}, with id ${foundBurger.id}.`);
      
      foundBurger.update({
        consumed: status
      })

      res.end();

    });

})

//DELETE BURGER with ID id
router.delete("/api/burgers/:id", function(req,res){

  var id = req.params.id;
  
  burger.destroy({
    where: {
      id: id
    }
  })
  .then(result => {
    console.log(`Deleted burger, with id.` + id);
    console.log(result);
    res.end();
  });

});

module.exports = router;