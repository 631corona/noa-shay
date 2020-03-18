var express = require("express");
var router = express.Router();

var Status = {
  IN_PROGRESS: 1,
  FAILED: 2,
  SUCCESS: 3
};

labs = [
    { id: "", name: "", progress_percentile: 20.5, status: Status.IN_PROGRESS },
    {id: "", name: "", progress_percentile: 20.5, status: Status.IN_PROGRESS}
];

router.get("/", function(req, res, next) {
  res.send(labs);
});

module.exports = router;
