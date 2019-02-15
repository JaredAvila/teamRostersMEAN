const mongoose = require("mongoose"),
  Player = mongoose.model("Player");

module.exports = {
  getAll: (req, res) => {
    Player.find({}, (err, players) => {
      err
        ? res.json({ message: "error", err })
        : res.json({ message: "success", players });
    });
  },
  createPlayer: (req, res) => {
    const player = new Player({
      name: req.body.name,
      pos: req.body.pos,
      game1: req.body.game1,
      game2: req.body.game2,
      game3: req.body.game3
    });
    player.save(err => {
      if (err) {
        res.json({ message: "error", error: err });
      } else {
        res.json({ success: player });
      }
    });
  },
  deletePlayer: (req, res) => {
    Player.remove({ _id: req.params.id }, err => {
      err
        ? res.json({ message: "error", err })
        : res.json({ message: "success, player deleted" });
    });
  },
  editPlayer: (req, res) => {
    Player.findOne({ _id: req.body.id }, (err, player) => {
      if (err || player === null) {
        res.json({ message: "error", err });
      } else {
        player.game1 = req.body.game1;
        player.game2 = req.body.game2;
        player.game3 = req.body.game3;
        player.save(err => {
          if (err) {
            console.log("error: ", err);
          }
        });
        res.json({ message: "success", player });
      }
    });
  }
};
