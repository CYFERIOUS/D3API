 
var express = require('express');
var path = require('path');
var io = require('socket.io');
var socket = io();
const Joi = require('joi');
const dasher = express.Router();

 var filePath = "./public/graph1/graph1.html"
   var resolvedPath = path.resolve(filePath);

   var filePath2 = "./public/graph2/graph2.html"
   var resolvedPath2 = path.resolve(filePath2);

   var filePath3 = "./public/graph3/graph3.html"
	 var resolvedPath3 = path.resolve(filePath3);
	 
	 var filePath4 = "./public/graph4/graph4.html"
   var resolvedPath4 = path.resolve(filePath4);

   	 
	 var filePath5 = "./public/graph5/graph5.html"
	 var resolvedPath5 = path.resolve(filePath5);

	 var filePath6 = "./public/graph6/graph6.html"
	 var resolvedPath6 = path.resolve(filePath6);

	 dasher.get('/graph1data/', (req, res) => {
		var myJsonString = JSON.stringify(dataArray1);
		res.send(yJsonString);
	});


	dasher.get('/graph1/', (req, res) => {
		res.setHeader('Access-Control-Allow-Origin', 'http://www.dgflute.com/');

	  res.sendFile(resolvedPath);
	});

	dasher.get('/graph2/', (req, res) => {
	  res.sendFile(resolvedPath2);
	});

	dasher.get('/graph3/', (req, res) => {
	  res.sendFile(resolvedPath3);
	});

	dasher.get('/graph4/', (req, res) => {
	  res.sendFile(resolvedPath4);
	});

	dasher.get('/graph5/', (req, res) => {
		res.sendFile(resolvedPath5);
	});

	dasher.get('/graph6/', (req, res) => {
		res.sendFile(resolvedPath6);
	});

	module.exports = dasher; 