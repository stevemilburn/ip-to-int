 'use strict';

 var toInt = function(ip) {
 	var octets = ip.split('.');
 	var i;

 	i = (parseInt(octets[0], 10) * Math.pow(256, 3)) + (parseInt(octets[1], 10) * Math.pow(256, 2)) + (parseInt(octets[2], 10) * 256) + parseInt(octets[3], 10);
	return i;
 };

 var toIP = function(i) {

 };

 module.exports = {
 	toInt: toInt,
 	toIP: toIP
 };