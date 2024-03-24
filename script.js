var memory = document.getElementById("memory");
var reaction = document.getElementById("reaction");
var verbal = document.getElementById("verbal");
var visual = document.getElementById("visual");

var average = document.getElementById("average");
var grade = document.getElementById("grade");

var button = document.getElementById("button");

var m,r,ve,vi,a;

var i=1;





document.addEventListener("DOMContentLoaded",increasemarks());
button.addEventListener("click",function () {
  increasemarks();
});





function increasemarks(){
  pickrandom();
}


function pickrandom() {
  
  m= Math.round(Math.random()*100);
  r= Math.round(Math.random()*100);
  ve= Math.round(Math.random()*100);
  vi= Math.round(Math.random()*100);
  

  if(r<60 || m<60 || ve<60 || vi<60 ){
    pickrandom();
  }
  else{
    console.log(m+","+r+","+ve+","+vi);
    assignmarks();
}}

function assignmarks() {
  memory.innerHTML = m;
  reaction.innerHTML = r;
  verbal.innerHTML =ve;
  visual.innerHTML = vi;
  
  
  evaluteAverage();
}

function evaluteAverage() {
  a = Math.round((m+r+ve+vi)/4);
  average.innerHTML =a;
  
  if(a >= 80){
    grade.innerHTML = "Best";
  }
  else if(a>=70){
    grade.innerHTML ="Great";
  }
  else{
    grade.innerHTML="Good"
  }
}