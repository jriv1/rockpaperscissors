const rock = document.querySelector(".btn-rock");
const paper = document.querySelector(".btn-paper");
const scissors = document.querySelector(".btn-scissors");
const result = document.querySelector(".result");
const playerChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".computerChoice");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
let cScore = 0;
let pScore = 0;

function computerPlay(){
    
    let computerChoice = Math.trunc(Math.random() * 3);
    if(computerChoice === 0){
        return ("ROCK");
    }
    else if(computerChoice === 1){
        return ("PAPER");
    }
    else if(computerChoice === 2){
        return("SCISSORS");
    }
    else{
        return("ERROR");
    }
    
}
 
function play(computerSelection,playerSelection){
      
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
    
        if(computerSelection === playerSelection){
           result.textContent = "Draw";
        }
        else if(computerSelection === "ROCK" && playerSelection === "PAPER")       {    
           result.textContent = "You win!!!";
           pScore += 1;
           
        }
        else if( computerSelection === "ROCK" && playerSelection === "SCISSORS"){     
           result.textContent = "You lose!!!"
           cScore += 1;
          
        }
        else if(computerSelection === "PAPER"&& playerSelection === "SCISSORS")    {          
           result.textContent = "You win!!!";
           pScore +=1;
          
        }     
        else if( computerSelection === "PAPER"&& playerSelection === "ROCK"){
           
           result.textContent = "You lose!!!"
           cScore +=1;
        }
        else if(computerSelection === "SCISSORS" && playerSelection === "ROCK")      {
           
           result.textContent = "You win!!!";
           pScore +=1;
        }
        else if( computerSelection === "SCISSORS" && playerSelection === "PAPER"){
             
           result.textContent = "You lose!!!";
           cScore += 1;
        }
        else{
           result.textContent = "Err"
        }   
        console.log(pScore,cScore);
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }



    rock.addEventListener("click",function(){
   play(computerPlay(),"ROCK");
  });
     
    paper.addEventListener("click",function(){
        play(computerPlay(),"PAPER");
     });
 
    scissors.addEventListener("click",function(){
       play(computerPlay(),"SCISSORS");
    });

   
