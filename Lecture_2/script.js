const el = document.getElementById("myCanvas");
const ctx = el.getContext('2d');

// Drawing a line 
ctx.beginPath();
ctx.moveTo(100,300);
ctx.lineTo(300,300);
ctx.lineTo(300,100);
ctx.lineTo(200,50);
ctx.lineTo(100,100);
ctx.lineTo(100,300);
ctx.stroke();



// Drawing a Circle
ctx.beginPath();
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();


//Drawing a Rectangle
ctx.beginPath()
ctx.rect(100,300,200,20);
ctx.stroke();