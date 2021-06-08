document.getElementById('bodyColor').oninput = drawRaccoon;
document.getElementById('noseColor').oninput = drawRaccoon;
document.getElementById('valueX').oninput = drawRaccoon;
document.getElementById('valueY').oninput = drawRaccoon;
document.getElementById('tailThickness').oninput = drawRaccoon;
document.getElementById('tailColor1').oninput = drawRaccoon;
document.getElementById('tailColor2').oninput = drawRaccoon;
document.getElementById('tailColor2').oninput = drawRaccoon;

var can = document.getElementById("canvas");
var c = can.getContext("2d");
can.width = window.innerWidth;
can.height = window.innerHeight;

let x = can.width/2;
let y = can.height/2;

let eyesCheck = "open";

drawRaccoon();

function resetRaccoon(){
	eyesCheck = "open";
	setTimeout(drawRaccoon, 10);
}

function drawRaccoon(){
	let bodyColor = document.getElementById("bodyColor").value;
	let noseColor = document.getElementById("noseColor").value;
	let tailColor1 = document.getElementById("tailColor1").value;
	let tailColor2 = document.getElementById("tailColor2").value;
	x = can.width/2 + parseInt(document.getElementById("valueX").value);
	y = can.height/2 + parseInt(document.getElementById("valueY").value);
	let tailThickness = document.getElementById("tailThickness").value;
	
	//canvas//
	c.fillStyle="#ffffff";
	c.fillRect(0, 0, can.width, can.height);
	
	//body//
	c.beginPath();
	c.arc(x, y, 45, 0, 2 * Math.PI);
	c.lineWidth = 1;
	c.fillStyle=bodyColor;
	c.fill();
	c.strokeStyle="black";
	c.stroke();
	c.closePath();
	
	//head//
	c.beginPath();
	c.arc(x+30, y, 35, 0, 2 * Math.PI);
	c.lineWidth = 1;
	c.fillStyle = bodyColor;
	c.fill();
	c.strokeStyle = "black";
	c.stroke();
	c.closePath();
	
	//tail//
	c.beginPath();
	c.moveTo(x-45, y+1);
	c.lineTo(x-55, y+1);
	c.lineWidth = tailThickness;
	c.strokeStyle = tailColor2;
	c.stroke();
	c.closePath();
	
	c.beginPath();
	c.moveTo(x-55, y+1);
	c.lineTo(x-65, y+1);
	c.strokeStyle = tailColor1;
	c.stroke();
	c.closePath();
	
	c.beginPath();
	c.moveTo(x-65, y+1);
	c.lineTo(x-75, y+1);
	c.strokeStyle = tailColor2;
	c.stroke();
	c.closePath();
	
	c.beginPath();
	c.moveTo(x-75, y+1);
	c.lineTo(x-85, y+1);
	c.strokeStyle = tailColor1;
	c.stroke();
	c.closePath();
	
	c.beginPath();
	c.moveTo(x-85, y-(0.4 * tailThickness));
	c.lineWidth = 1;
	c.bezierCurveTo(x-95, y-(0.4 * tailThickness)+1, x-95, y+(0.4 * tailThickness)+1, x-85, y+(0.5 * tailThickness)+1);
	c.fillStyle = tailColor2;
	c.fill();
	c.closePath();
	
	//eyes//
	drawEyes();

	
	//nose//
	c.beginPath();
	c.lineWidth = 3;
	c.moveTo(x+64, y+7);
	c.lineTo(x+80, y);
	c.lineTo(x+64, y-8);
	c.strokeStyle="black";
	c.stroke();
	c.fillStyle=bodyColor;
	c.fill();
	c.closePath();
	
	//boop//
	c.beginPath();
	c.arc(x+80, y, 4, 0, 2 * Math.PI);
	c.fillStyle=noseColor;
	c.fill();
	c.closePath();
	
	//ears//
	c.beginPath();
	c.lineWidth = 1;
	c.moveTo(x+22, y-28);
	c.lineTo(x+10, y-23);
	c.lineTo(x+18, y-13);
	c.strokeStyle="black";
	c.stroke();
	c.closePath();
	
	c.beginPath();
	c.moveTo(x+18, y+9);
	c.lineTo(x+10, y+19);
	c.lineTo(x+22, y+24);
	c.strokeStyle="black";
	c.stroke();
	c.closePath();
	
	//mousache//
	c.beginPath();
	c.lineWidth = 0.5;
	c.moveTo(x+81, y+3);
	c.lineTo(x+83, y+15);
	c.strokeStyle="gray";
	c.stroke();
	c.closePath();
	
	c.beginPath();
	c.moveTo(x+81, y+3);
	c.lineTo(x+78, y+15);
	c.stroke();
	c.closePath();
	
	c.beginPath();
	c.moveTo(x+81, y-3);
	c.lineTo(x+78, y-15);
	c.stroke();
	c.closePath();
	
	c.beginPath();
	c.moveTo(x+81, y-3);
	c.lineTo(x+83, y-15);
	c.stroke();
	c.closePath();
}

function openEyes(){
	c.beginPath();
	c.arc(x+45, y-10, 5, 0, 2 * Math.PI);
	c.fillStyle="black";
	c.fill();
	c.closePath();
	
	c.beginPath();
	c.arc(x+45, y+10, 5, 0, 2 * Math.PI);
	c.fillStyle="black";
	c.fill();
	c.closePath();
}

function closeEyes(){
	c.beginPath();
	c.moveTo(x+46, y-15);
	c.bezierCurveTo(x+40, y-12, x+40, y-8, x+45, y-5);
	c.lineWidth = 1;
	c.strokeStyle="black";
	c.stroke();
	c.closePath();
	
	c.beginPath();
	c.moveTo(x+45, y+5);
	c.bezierCurveTo(x+40, y+8, x+40, y+12, x+46, y+15);
	c.lineWidth = 1;
	c.strokeStyle="black";
	c.stroke();
	c.closePath();
}

function openingEyes(){
	eyesCheck = "open";
	drawRaccoon();
}

function closingEyes(){
	eyesCheck = "close";
	drawRaccoon();
}

function drawEyes(){
	if(eyesCheck == "close"){
		closeEyes();
	}
	else if(eyesCheck == "open"){
		openEyes();
	}
	else{
		console.log("something is wrong")
	}
}


