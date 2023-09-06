const s1 = new Audio("s1.mp3")
const s2 = new Audio("s2.mp3")
const s3 = new Audio("s3.mp3")
const s4 = new Audio("s4.mp3")
const s5 = new Audio("s5.mp3")

document.addEventListener('keydown', function(info){
    if(info.code=="KeyA" || info.code=="Numpad1"){
        s1.currentTime=0;
        s1.play();
    }
    if(info.code=="KeyS" || info.code=="Numpad2"){
        s1.currentTime=0;
        s2.play();
    }
    if(info.code=="KeyD" || info.code=="Numpad3"){
        s1.currentTime=0;
        s3.play();
    }
    if(info.code=="KeyF" || info.code=="Numpad4"){
        s1.currentTime=0;
        s4.play();
    }
    if(info.code=="KeyG" || info.code=="Numpad5"){
        s1.currentTime=0;
        s5.play();
    }
});