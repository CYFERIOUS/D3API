const mongoose = require('mongoose');
const Joi = require('joi');

const Antagon = new mongoose.Schema({
  name: String,
  clan: String
});

const Enemies = mongoose.model('Antagonist',Antagon);


exports.Enemies  = Enemies;
exports.Antagon = Antagon;

