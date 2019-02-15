const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  path = require("path"),
  port = 8000;
app.use(bodyParser.json());
app.use(express.static(__dirname + "../../client/rosters/dist/rosters"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require("./models/Player");
require("./config/routes")(app);

app.listen(port, () => console.log(`listening on port ${port}`));
