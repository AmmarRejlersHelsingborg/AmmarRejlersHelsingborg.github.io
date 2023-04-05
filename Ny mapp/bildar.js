

let emo =5;
let comImaging = document.getElementById("computerImgI");

let Kristbild=document.getElementById("kplay");

if(Kristbild){ Kristbild.addEventListener("mousedown", function() {
emo = 1;
console.log(emo);
  
})};


let AneBild=document.getElementById("Aplay")
if(AneBild){ AneBild.addEventListener("mousedown", function() {
  emo = 2;
  console.log(emo);
  
})};

module.exports.emo= { 
     emo
  };




  
