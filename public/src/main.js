/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = Math.floor(window.innerWidth/2);
canvas.height = Math.floor(window.innerHeight/2);

ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(30, 40);
ctx.lineTo(90, 80);
ctx.stroke();
