const express = require("express");
const app = express();
var createError = require('http-errors');
var cors = require("cors");

app.use(cors());

var labsRouter = require("./routes/labs");
app.use("/api/v1/labs", labsRouter);

app.use(function(req, res, next) {
    next(createError(404));
  });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
