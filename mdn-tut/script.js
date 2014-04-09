// Canvas script for MDN Canvas Tutorial

(function() {
	
	"use strict";

	var canvas = document.getElementById('tutorial'),
		c2 = document.getElementById('c2');

	// check for support
	if(canvas.getContext) {
		var cxt = canvas.getContext('2d'),
			cxt2 = c2.getContext('2d');
		// drawing code here

		cxt.fillStyle = "rgb(200,0,0)";
		cxt.fillRect(10, 10, 55, 50);

		cxt.fillStyle = "rgba(0, 0, 250, 0.5)";
		cxt.fillRect(30, 30, 55, 50);


		cxt2.fillRect(25, 25, 100, 100);
		cxt2.clearRect(45, 45, 60, 60);
		cxt2.strokeRect(50, 50, 50, 50);

	} else {
		// canvas-unsupported code here
	}


})();