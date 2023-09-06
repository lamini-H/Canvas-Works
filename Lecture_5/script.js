const el = document.getElementById("myCanvas");
const ctx = el.getContext('2d');

const x1 = 200,y1=300, r1=50;
const scaleFactor = 0.8;

//Drawing a Rectangle with colors and strokes

    const  width = 400, height=400;
    const spacing = 80;
    let x = spacing;
    while(x<width){
        let y =spacing;
        while(y<height){
            const scaleFactor = Math.random()+0.5;
            drawSnowman(x,y,10,scaleFactor);
            y=y+spacing;
        }
        x=x+spacing;
    }




function drawSnowman(x1,y1,r1,scaleFactor){
    //x1,y1 and r1 are the properties of the bottom ball of the
    ctx.beginPath();
    ctx.arc(x1,y1,r1,0, Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();

    ctx.beginPath();
    const r2 = r1*scaleFactor, x2=x1, y2=y1-r1-r2;
    ctx.arc(x2,y2,r2,0,Math.PI*2);
    ctx.fill()

    ctx.beginPath();
    const r3=r2*scaleFactor,x3=x2, y3=y2-r2-r3;
    ctx.arc(x3,y3,r3,0,Math.PI*2);
    ctx.fill();

    drawHat(x3,y3,r3);
}




//Draw hat of snowman function
function drawHat(headX,headY,headRad){
    ctx.beginPath();
    const w4=headRad*2,h4=headRad/2,x4=headX-w4/2, y4=headY-headRad;
    ctx.rect(x4,y4,w4,h4);
    ctx.stroke();
    ctx.fillStyle="black";
    ctx.fill();

    ctx.beginPath();
    const w5=w4*scaleFactor,h5=headRad,x5=headX-w5/2, y5=y4-h5;
    ctx.rect(x5,y5,w5,h5);
    ctx.stroke();
    ctx.fill();
}