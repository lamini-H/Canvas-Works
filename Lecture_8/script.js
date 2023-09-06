const ctx = myCanvas.getContext('2d');

const heartImage = new Image();
heartImage.src = "heart.png";

const maxY = 90;
const rangeY = 90;
let p=0;

animate();

function animate(){
    p=p+0.02;
    if(p>1){
        p=0;
    }
    const y=maxY-Math.abs(Math.sin(p*Math.PI))*rangeY;
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
   
    ctx.drawImage(heartImage,100,y,200,200);
    
    
    ctx.font ="30px Arial";
    ctx.textBaseline="middle";
    ctx.textAlign ="center";
    ctx.fillStyle = "red";
    ctx.fillText("HTML Canvas",200,300);

    requestAnimationFrame(animate);
}


