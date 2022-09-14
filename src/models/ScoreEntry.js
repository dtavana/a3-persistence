const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const ScoreEntry = new mongoose.Schema({
  playerName: { type: String, unique: true },
  playerScore: { type: Number, min: 0 },
  winResult: Boolean,
});
const model = mongoose.model("ScoreEntry", ScoreEntry);

module.exports = model;
