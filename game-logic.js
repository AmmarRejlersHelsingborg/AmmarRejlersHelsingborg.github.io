// All code should be written in this file.
//const bildar = require('./bildar.js');

let emo 




let playerOneMoveOneType
let playerOneMoveTwoType
let playerOneMoveThreeType

let playerTwoMoveOneType
let playerTwoMoveTwoType
let playerTwoMoveThreeType

let playerOneMoveOneValue
let playerOneMoveTwoValue
let playerOneMoveThreeValue

let playerTwoMoveOneValue
let playerTwoMoveTwoValue
let playerTwoMoveThreeValue

let roundOneWinner
let roundTwoWinner
let roundThreeWinner

let gameWinner

 

 
 

 
 //nameing.addEventListener("click",function(){console.log(nameing)}) 

 //let val1= document.getElementsByClassName("firstRound")[0].innerHTML;
let nameing;
let val1="Rock";
let val2="Rock";
let val3="Rock";
let points1= 0;
let points2= 0;
let points3= 0;








 let val1test1= document.getElementById("rock1");
 let val1test2= document.getElementById("paper1");
 let val1test3= document.getElementById("scissors1");

  
//document.getElementById("headName").addEventListener("click",function(){document.getElementById("computerImg").src="img/Krister1.png"});


 if(val1test1){ val1test1.addEventListener("click",function(){val1= "Rock";})};
 if(val1test2){val1test2.addEventListener("click",function(){val1= "Paper"; })};
 if(val1test3){val1test3.addEventListener("click",function(){ val1= "Scissors";})};



let val2test1= document.getElementById("rock2");
let val2test2= document.getElementById("paper2");
let val2test3= document.getElementById("scissors2");

if(val2test1){val2test1.addEventListener("click",function(){ val2= "Rock"; })};
if(val2test2){ val2test2.addEventListener("click",function(){val2= "Paper";});}   
if(val2test3) {val2test3.addEventListener("click",function(){ val2= "Scissors";})};


let val3test1= document.getElementById("rock3");
let val3test2= document.getElementById("paper3");
let val3test3= document.getElementById("scissors3");

if(val3test1){val3test1.addEventListener("click",function(){val3= "Rock";})};
if(val3test2){ val3test2.addEventListener("click",function(){val3= "Paper";})};
if(val3test3){ val3test3.addEventListener("click",function(){val3= "Scissors";})};              

function setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

//failfast return 
//if (!moveOneType || !moveTwoType || !moveOneValue || !moveTwoValue || !moveThreeType || !moveThreeValue){
 //   return 'error' ;
//};

//if(!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)){
   // return 'error';
//};

//if(!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)){
  //  return 'error';
//};

//if ((moveTwoValue + moveOneValue + moveThreeValue ) > 99 ){
//    return 'error';
//};



if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeValue = moveThreeValue;
    console.log(playerOneMoveOneType
        ,playerOneMoveTwoType
        , playerOneMoveThreeType,
        playerOneMoveOneValue,
        playerOneMoveTwoValue,
        playerOneMoveThreeValue);

}
else if (player === 'Computer') {
    
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeValue = moveThreeValue;

    console.log(playerTwoMoveOneType
        ,playerTwoMoveTwoType
        , playerTwoMoveThreeType,
        playerTwoMoveOneValue,
        playerTwoMoveTwoValue,
        playerTwoMoveThreeValue); 
};

function isValidMoveType(moveType){
    return (moveType === 'rock' )|| (moveType === 'paper') || (moveType ==='scissors');
};

function isValidMoveValue(moveValue){
    return (moveValue >= 1) &&(moveValue <=99);
};
//document.getElementsByid("Label11").style.display="none";

};




const getRoundWinner= (roundNumber)=> {

if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerOneMoveThreeType || !playerOneMoveThreeValue 
    ||!playerOneMoveTwoType || !playerOneMoveTwoValue || !playerTwoMoveOneType || !playerTwoMoveOneValue ||
    !playerTwoMoveThreeType || !playerTwoMoveThreeValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue 
    ){console.log("er")}


else if (roundNumber === 1) {

     if ((playerOneMoveOneType === playerTwoMoveOneType) && (playerOneMoveOneValue === playerTwoMoveOneValue))
      { roundOneWinner= 0;}

     else if ((playerOneMoveOneType === playerTwoMoveOneType) && (playerOneMoveOneValue !== playerTwoMoveOneValue))
      {if(playerOneMoveOneValue > playerTwoMoveOneValue)
        {roundOneWinner = 10;}

      else if (playerOneMoveOneValue < playerTwoMoveOneValue)
      {roundOneWinner= 100;}
        }

      else if(playerOneMoveOneType !==playerTwoMoveOneType){
        if(playerOneMoveOneType === 'Rock') {
            if (playerTwoMoveOneType === 'Paper'){roundOneWinner= 100;  }
            else if (playerTwoMoveOneType === 'Scissors'){roundOneWinner=10; };
        }

        else if(playerOneMoveOneType === 'Paper') {
            if (playerTwoMoveOneType === 'Scissors'){roundOneWinner= 100; }
            else if (playerTwoMoveOneType === 'Rock'){roundOneWinner=10; }; 
        }

         else if(playerOneMoveOneType === 'Scissors') {
            if (playerTwoMoveOneType === 'Rock'){roundOneWinner= 100; }
            else if (playerTwoMoveOneType === 'Paper'){roundOneWinner=10; }; 
        };     
    }
    console.log("ROund1OK");
}


else if (roundNumber===2){
    if((playerOneMoveTwoType === playerTwoMoveTwoType) && (playerOneMoveTwoValue === playerTwoMoveTwoValue))
    {roundTwoWinner= 0;
        return (`The winner for round Three is Tie`)}
    
    else if (playerOneMoveTwoType ===playerTwoMoveTwoType && playerOneMoveTwoValue !== playerTwoMoveTwoValue)
        {if(playerOneMoveTwoValue > playerTwoMoveTwoValue)
            {roundTwoWinner= 10;
                return (`Player One`)}
    
        else if (playerOneMoveTwoValue < playerTwoMoveTwoValue)
        {roundTwoWinner= 100;
            return (`Player Two`)};}
    
         else if(playerOneMoveTwoType !==playerTwoMoveTwoType){
            if(playerOneMoveTwoType === 'Rock') {
            if (playerTwoMoveTwoType === 'Paper'){roundTwoWinner= 100; return (`Player Two`)}
            else if (playerTwoMoveTwoType === 'Scissors'){roundTwoWinner=10; return (`Player One`)};
         }
    
          else if(playerOneMoveTwoType === 'Paper') {
                if (playerTwoMoveTwoType === 'Scissors'){roundTwoWinner= 100; return (`Player Two`)}
                else if (playerTwoMoveTwoType === 'Rock'){roundTwoWinner=10; return (`Player One`)}; 
            }
    
          else if(playerOneMoveTwoType === 'Scissors') {
                if (playerTwoMoveTwoType === 'Rock'){roundTwoWinner= 100; return (`Player Two`)}
               else if (playerTwoMoveTwoType === 'Paper'){roundTwoWinner=10; return (`Player One`)}; 
            };     
        };
    console.log("ROund2OK");
}



else if (roundNumber===3){
        if (playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeValue === playerTwoMoveThreeValue)
        { roundThreeWinner= 0;
            return (`The winner for round Three is Tie`)}
        
        else if (playerOneMoveThreeType ===playerTwoMoveThreeType && playerOneMoveThreeValue !== playerTwoMoveThreeValue)
            {if(playerOneMoveThreeValue > playerTwoMoveThreeValue)
                {roundThreeWinner= 10;
                    return (`Player One`)}
        
            else if (playerOneMoveThreeValue < playerTwoMoveThreeValue)
            {roundThreeWinner= 100;
                return (`Player Two`)};}
        
             else if(playerOneMoveThreeType !==playerTwoMoveThreeType){
                if(playerOneMoveThreeType === 'Rock') {
                if (playerTwoMoveThreeType === 'Paper'){roundThreeWinner= 100; return (`Player Two`)}
                else if (playerTwoMoveThreeType === 'Scissors'){roundThreeWinner=10; return (`Player One`)};
             }
        
              else if(playerOneMoveThreeType === 'Paper') {
                    if (playerTwoMoveThreeType === 'Scissors'){roundThreeWinner= 100; return (`Player Two`)}
                    else if (playerTwoMoveThreeType === 'Rock'){roundThreeWinner=10; return (`Player One`)}; 
                }
        
              else if(playerOneMoveThreeType === 'Scissors') {
                    if (playerTwoMoveThreeType === 'Rock'){roundThreeWinner= 100; return (`Player Two`)}
                   else if (playerTwoMoveThreeType === 'Paper'){roundThreeWinner=10; return (`Player One`)}; 
                };     
            }
            console.log("ROund3OK");}


            

    };



   // 'Rock' && playerOneMoveOneValue === ''








function getGameWinner(){
    setTimeout(() => {
        getRoundWinner(1)
    }, 100); 


    setTimeout(() => {
        getRoundWinner(2)
    }, 500); 

    setTimeout(() => {
    getRoundWinner(3);
    console.log(roundOneWinner,roundTwoWinner,roundThreeWinner) 
    }, 1000); 

    

    setTimeout(() => {
        if (((roundOneWinner + roundTwoWinner + roundThreeWinner) >= 10) && ((roundOneWinner + roundTwoWinner + roundThreeWinner)<200) ){
            gameWinner= `The Winner is ${nameing}`;
           
        }
        else if((roundOneWinner + roundTwoWinner + roundThreeWinner )>= 200){
            if(document.getElementsByClassName('winScreenA')[0])
               {gameWinner= "The winner is The Ammar"}
               else if(document.getElementsByClassName('winScreenM')[0])
               {gameWinner= "The winner is The Max"}
               else if(document.getElementsByClassName('winScreenG')[0])
               {gameWinner= "The winner is The Gezim"}
               else if(document.getElementsByClassName('winScreenAn')[0])
               {gameWinner= "The winner is The Anette"}
               else if(document.getElementsByClassName('winScreenK')[0])
               {gameWinner= "The winner is The Krister"}
        }
       
    
        else if((roundOneWinner + roundTwoWinner + roundThreeWinner) === 0){
            gameWinner= "The winner is Tie";  
        }
        else{ console.log("eee")};
        console.log(gameWinner);  
        document.getElementById("winner").innerHTML= gameWinner;
    }, 1500);
   
};




function setComputerMoves () {

    let moveOneType= (Math.floor(Math.random()*3)+1);
    var cImg1= document.getElementById("img1C")
     if (moveOneType === 1){playerTwoMoveOneType = 'Rock';
     cImg1.src= "img/rock.jpg"}
     
     else if (moveOneType=== 2){ playerTwoMoveOneType ='Paper'
     cImg1.src="img/paper.jpg"}
    

     else if (moveOneType=== 3){ playerTwoMoveOneType ='Scissors'
     cImg1.src="img/scissors.jpg" }
    
     




    let moveTwoType = (Math.floor(Math.random()*3)+1);
    var cImg2= document.getElementById("img2C")
     if (moveTwoType===1){playerTwoMoveTwoType = 'Rock';
     cImg2.src="img/rock.jpg"}
     else if (moveTwoType===2){ playerTwoMoveTwoType ='Paper'
     cImg2.src="img/paper.jpg"}
     else if (moveTwoType===3){ playerTwoMoveTwoType ='Scissors'
     cImg2.src="img/scissors.jpg"}

    let moveThreeType = Math.floor(Math.random()*3) +1;
    var cImg3= document.getElementById("img3C")
      if (moveThreeType === 1){playerTwoMoveThreeType = 'Rock';
      cImg3.src="img/rock.jpg"}
      else if (moveThreeType === 2){ playerTwoMoveThreeType ='Paper';
      cImg3.src="img/paper.jpg"}
      else if (moveThreeType === 3){ playerTwoMoveThreeType ='Scissors'
      cImg3.src="img/scissors.jpg"};

      let moveOneValue = Math.floor(Math.random()*96) +1;
      
      let moveTwoValue = Math.floor(Math.random()*(97- moveOneValue)) +1;
      let moveThreeValue = Math.floor(Math.random()*(99 - moveOneValue - moveTwoValue)) ;
    

    setPlayerMoves('Computer',moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
    document.getElementById("Cvolum1").innerHTML= playerTwoMoveOneValue;
    document.getElementById("Cvolum2").innerHTML= playerTwoMoveTwoValue;
    document.getElementById("Cvolum3").innerHTML= playerTwoMoveThreeValue;
    nameing = document.querySelectorAll("input")[0].value
};




let adding= function(){
points1= document.getElementById("volume1").value;
points2= document.getElementById("volume2").value;
points3= document.getElementById("volume3").value;

//displying round2
  if(val2 ==="Rock"){
    document.getElementById("Label23").style.display="none";
    document.getElementById("Label22").style.display="none";
    }
    else if(val2==="Paper"){
        document.getElementById("Label23").style.display="none";
        document.getElementById("Label21").style.display="none";
    }
    else if(val2==="Scissors"){
        document.getElementById("Label22").style.display="none";
        document.getElementById("Label21").style.display="none";
    };

    //displying round1
  if(val1==="Rock"){
    document.getElementById("Label13").style.display="none";
    document.getElementById("Label12").style.display="none";
    }
    else if(val1==="Paper"){
        document.getElementById("Label13").style.display="none";
        document.getElementById("Label11").style.display="none";
    }
    else if(val1==="Scissors"){
        document.getElementById("Label12").style.display="none";
        document.getElementById("Label11").style.display="none";
    };


        //displying round3
if(val3==="Rock"){
    document.getElementById("Label33").style.display="none";
    document.getElementById("Label32").style.display="none";
    }
    else if(val3==="Paper"){
        document.getElementById("Label33").style.display="none";
        document.getElementById("Label31").style.display="none";
    }
    else if(val3==="Scissors"){
        document.getElementById("Label32").style.display="none";
        document.getElementById("Label31").style.display="none";
    };

    //displaying start botton
    document.getElementsByClassName("starInstra")[0].style.display="none";
    document.getElementsByClassName("firstCom")[0].style.display="block";
    document.getElementsByClassName("secondCom")[0].style.display="block";
    document.getElementsByClassName("thirdCom")[0].style.display="block";
    //document.getElementsByClassName("val")[0].style.display="grid";




setTimeout(() => {
    setPlayerMoves('Player One',val1,points1,val2,points2,val3,points3); },1000);
setTimeout(setComputerMoves, 2000);

setTimeout(getGameWinner, 3000);


};






console.log('ok')

let starting= document.getElementById("startPlay");
if(starting){ starting.addEventListener("click",adding)};



if(emo === 1){
    comImaging.src="img/Krister1.png";
    comImaging.style.display = "block"; }
  
    else if(emo === 2){
      comImaging.src = "img/AnetteEringskog.png";
      comImaging.style.display = "block";
    }
  





//.................................SQLite 


//const path = require('path');

//const sqlite = require('sqlite3');
//const db = new sqlite.Database('_/db.sqlite');

//const gameLogic = require('./game-logic.js')
//const emo = gameLogic.emo





//play.........
