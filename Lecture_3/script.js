const el = document.getElementById("myCanvas");
const ctx = el.getContext('2d');



//Drawing a Rectangle with colors and strokes
ctx.beginPath()
ctx.rect(100,100,200,200);
ctx.lineWidth = 20;
ctx.strokeStyle = 'rgb(223,226,60)';
ctx.fillStyle ="#AD2C05";
ctx.fill()
ctx.stroke();