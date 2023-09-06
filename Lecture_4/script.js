const el = document.getElementById("myCanvas");
const ctx = el.getContext('2d');



//Drawing a Rectangle with colors and strokes
const thickness = 20;
let x = 0, y=0, w=400, h=400;

let i =1;
while (i<=10){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    if(i%2==1){  
    ctx.fillStyle = "blue";
    }else{
    ctx.fillStyle = "white";  
    }

ctx.fill();
x=x+thickness;
y=y+thickness;
w=w-thickness-thickness;
h = h-thickness-thickness;
i=i+1;
}
// ctx.beginPath()
// ctx.rect(x,y,w,h);
// ctx.fillStyle = "white";
// ctx.fill();
// x=x+thickness;
// y=y+thickness;
// w=w-thickness-thickness;
// h = h-thickness-thickness;

// ctx.beginPath()
// ctx.rect(x,y,w,h);
// ctx.fillStyle = "blue";
// ctx.fill();
// x=x+thickness;
// y=y+thickness;
// w=w-thickness-thickness;
// h = h-thickness-thickness;

// ctx.beginPath()
// ctx.rect(x,y,w,h);
// ctx.fillStyle = "white";
// ctx.fill();
// x=x+thickness;
// y=y+thickness;
// w=w-thickness-thickness;
// h = h-thickness-thickness;

// ctx.beginPath()
// ctx.rect(x,y,w,h);
// ctx.fillStyle = "blue";
// ctx.fill();
// x=x+thickness;
// y=y+thickness;
// w=w-thickness-thickness;
// h = h-thickness-thickness;