const mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var io = require('socket.io');
var socket = io();
const router = express.Router();
const {FootSoldier,validate} = require('../models/footSoldier')


	router.get('/foot/:id', async (req, res) => {

		const soldier = await FootSoldier.findById(req.params.id)
		if(!soldier ) res.status(404).send('SHREDER HASNT FOUND THE SOLDIER');
		res.send(soldier);
	});

	router.get('/foot/', async(req,res)=>{
		const soldier = await FootSoldier.find().sort('name');
		res.send(soldier);
	});
	

	
	router.post('/foot/', async(req, res)=>{

		const { error } = validate(req.body);

		if(error){
			res.status(400).send(error.details[0].message);
			return;
		}

		let soldier = new FootSoldier({
			name: req.body.name,
			isWitch: req.body.isWitch,
			phone: req.body.phone

		});
		soldier = await soldier.save();
		
		res.send(soldier);
	});





	
module.exports = router; 
