const path = require("path"),
  players = require("../controllers/players");

module.exports = app => {
  // ------------------------------------ USER ROUTES

  //GET ALL PLAYERS
  app.get("/api/players", (req, res) => {
    players.getAll(req, res);
  });

  //CREATE NEW USER
  app.post("/api/player", (req, res) => {
    players.createPlayer(req, res);
  });

  //DELETE PLAYER
  app.delete("/api/player/:id", (req, res) => {
    players.deletePlayer(req, res);
  });

  //EDIT PLAYER
  app.put("/api/player", (req, res) => {
    players.editPlayer(req, res);
  });

  //REDIRECT TO ANGULAR IF NO OTHER ROUTES ARE HIT
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("../client/rosters/dist/rosters/index.html"));
  });
};
