function Bubblemake(){
    var clutter = "";
for(i = 1 ; i <= 108; i++){
    var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}

var score = 0;

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

var timer = 60;

function runtimer(){
   var stoptim = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer; 
        }else{
            clearInterval(stoptim);
            document.querySelector("#pbtm").innerHTML = "<h1>Game over</h1>";
        }
        
    }, 1000) 
}

var hitrn = 0;
function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedmun = Number(dets.target.textContent);
    if(clickedmun === hitrn){
        increasescore();
        Bubblemake()
        getnewhit()
    }
})

runtimer()
Bubblemake()
getnewhit()