const express = require("express");
const app = express();
var createError = require('http-errors');

var labsRouter = require("./routes/labs");
app.use("/api/v1/labs", labsRouter);

app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
