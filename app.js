
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
        else if(computerSelection === "ROCK" && playerSelection === "PAPER" ||
        computerSelection === "PAPER"&& playerSelection === "SCISSORS" ||
        computerSelection === "SCISSORS" && playerSelection === "ROCK" )     { 
            
           result.textContent = "You win!!!"; 
           winGame();   
           checkWinner(pScore,cScore);            
        }
        else if( computerSelection === "ROCK" && playerSelection === "SCISSORS" ||
        computerSelection === "PAPER"&& playerSelection === "ROCK" ||
        computerSelection === "SCISSORS" && playerSelection === "PAPER" )
        {     
           result.textContent = "You lose!!!" 
           loseGame();
           checkWinner(pScore,cScore);
        }  
        console.log(pScore,cScore);
    }
    function winGame(){
        pScore += 1;
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;   
    }

    function loseGame(){
        cScore += 1;
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        
    }
    function checkWinner(pScore,cScore){
        if(pScore === 5){
           resetScore();
            result.textContent = "You won, Restarting";

        }
        else if(cScore === 5){
            resetScore();
            result.textContent = "You lost against a computer, Restarting";
        }
    }
    function resetScore(){
        pScore = 0;
        cScore = 0;
        playerScore.textContent = 0;
        computerScore.textContent = 0;

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
