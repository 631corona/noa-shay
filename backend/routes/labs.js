var express = require("express");
var router = express.Router();
var { labs } = require("/IMPORTANT/Corona Project/Code/backend/data/labs");

router.get("/", function(req, res, next) {
  res.send(labs);
});

router.get("/:name", function(req, res, next) {
  labName = labs.find(lab => lab.name == req.params.name);
  if (labName === undefined) {
    console.log(labName);
    res.sendStatus(404).send("name not found!");
  }
  res.send(labName);
});

module.exports = router;
