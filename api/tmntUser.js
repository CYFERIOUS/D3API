const _ = require('lodash');
const mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var io = require('socket.io');
const bcrypt = require('bcrypt');
var socket = io();
const router = express.Router();
const {TmntUser,validate} = require('../models/userTmntModel')

console.log({TmntUser});

	router.post('/tmntu/', async(req, res)=>{

		const { error } = validate(req.body);

		if(error){
			res.status(400).send(error.details[0].message);
			return;
		}

		
		//console.log(req.body.email)

	
		

		let user = await TmntUser.findOne({email: req.body.email});
		 		if(user)res.status(400).send("already registered mutant");
				user = new TmntUser(_.pick(req.body, ['name','email','password']));
				const salt = await bcrypt.genSalt(10);
				user.password = await bcrypt.hash(user.password,salt);
				user = await user.save();
		
		
		res.send(_.pick(user, ['name','email']));
	});





	
module.exports = router; 
