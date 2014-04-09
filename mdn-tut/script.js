// Canvas script for MDN Canvas Tutorial

(function() {
	
	"use strict";

	var canvas = document.getElementById('tutorial'),
		c2 = document.getElementById('c2'),
		c3 = document.getElementById('c3');

	// check for support
	if(canvas.getContext) {
		var ctx = canvas.getContext('2d'),
			ctx2 = c2.getContext('2d'),
			ctx3 = c3.getContext('2d');
		// drawing code here

		ctx.fillStyle = "rgb(200,0,0)";
		ctx.fillRect(10, 10, 55, 50);

		ctx.fillStyle = "rgba(0, 0, 250, 0.5)";
		ctx.fillRect(30, 30, 55, 50);


		ctx2.fillRect(25, 25, 100, 100);
		ctx2.clearRect(45, 45, 60, 60);
		ctx2.strokeRect(50, 50, 50, 50);

		// draw a triangle
		ctx3.beginPath();
		ctx3.moveTo(75, 50);
		ctx3.lineTo(100, 75);
		ctx3.lineTo(100, 25);
		ctx3.fill();


	} else {
		// canvas-unsupported code here
	}


})();