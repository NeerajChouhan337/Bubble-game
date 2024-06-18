var timer = 60;
var score = 0;
var hitrn = 0;
function scoreIncrease(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function getHitVal(){
   hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitVal").textContent = hitrn;
}
function makeBUbble(){
    var clutter = "";
for(var i=1; i<=192; i++){
    var rn=Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function changeTimer(){
    var timeInt=setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;

        }
        else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>`;
        }

    },1000)
}
document.querySelector("#pbtm")
.addEventListener("click",function(dets){
   var clickednum = (Number(dets.target.textContent));
   if(clickednum === hitrn){
    scoreIncrease();
    // scoreIncrease();
    makeBUbble();
    getHitVal();
   }
});
changeTimer();
makeBUbble();
getHitVal();
// scoreIncrease();
