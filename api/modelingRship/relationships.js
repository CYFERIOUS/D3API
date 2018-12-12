const mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var io = require('socket.io');
var socket = io();
const alliesRouter = express.Router();
const {Allies,Support} = require('../models/relationShipMod')


async function createAllie(name, bio, website) { 
  const allie = new Allies({
    name, 
    bio, 
    website 
  });

  const result = await allie.save();
  console.log(result);
}

async function createSupport(name, authors) {
  const support = new Support({
    name, 
    authors
  }); 
  
  const result = await support.save();
  console.log(result);
}

async function listSupporters() { 
  const support = await Support
    .find()
    .populate('author', 'name -_id')
    .select('name author');
  console.log(support);
}

async function updateAllie(supportId) { 

  const support = await Support.findById(supportId);
  support.author.name = "Mei Pieh Chi";
  support.save();   
  console.log(support);
}

async function addAllie(supportId, allie){
  const support = await Support.findById(supportId);
  console.log(support)
  support.authors.push(allie);
  support.save();
}

async function removeAllie(supportId, authorId){
  const support = await Support.findById(supportId);
  const author = support.authors.id(authorId);
  author.remove();
  support.save();
  console.log(author);
}


removeAllie('5bd33d89903c6e1d1056e145','5bd33d89903c6e1d1056e143');

//addAllie('5bd33d89903c6e1d1056e145', new Allies ({name: 'Walkabout'}));
//updateAllie('5bd1f37247e2f724c057b81c');

// createSupport('Leatherhead9', [
//   new Allies({ name: 'Usagi yamamoto popo' }),
//   new Allies({ name: 'Mighty Mutanimals' }),

// ]);
//createAllie('Tang Shen', 'had been an orphan raised by the Ancient One', 'Tangshen.com');

//createSupport('Node Support', '5bcf90fd2d4da71b9cf8fd13');

//listSupporters();