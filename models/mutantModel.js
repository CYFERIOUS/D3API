const mongoose = require('mongoose');
const Joi = require('joi');
const Antagonico =  require('./antagonistModel');

const Mutante = new mongoose.Schema({
  name: String,
  animals: [Antagonico.Antagon]
});

const Mutagen = mongoose.model('Mutante',Mutante);

exports.Mutagen  = Mutagen;
