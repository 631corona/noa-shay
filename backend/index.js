const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

var labsRouter = require("./routes/labs");
app.use("/api/v1/labs", labsRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
