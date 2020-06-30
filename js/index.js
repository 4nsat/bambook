var c = document.getElementById("canvas");

for (var i = 0; i <= 15; i++) {
	c.innerHTML+="<div id='can"+i+"'></div>";
	var can = document.getElementById("can"+i);
	can.style.background = "#3AB67D";
	rnd = Math.floor(Math.random() * 10);
	can.style.width = rnd+"vw";
	can.style.height = rnd+"vw";
	can.style.position = "absolute";
	can.style.top = Math.floor(Math.random() * 45)+"vw";
	can.style.left = Math.floor(Math.random() * 95)+"vw";
	can.style.borderRadius = "50%";
}
