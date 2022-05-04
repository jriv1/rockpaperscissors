


function computerPlay(){

    let computerChoice = Math.trunc(Math.random() * 3);
    if(computerChoice === 0){
       return("ROCK");
    }
    else if(computerChoice === 1){
        return("PAPER");
    }
    else if(computerChoice === 2){
       return("SCISSORS")
    }
    else{
       return ("Computer Error");
    }
   
}

function playerPlay(choice){
    let choice1 = choice.toUpperCase();
    return choice1;
}



let computerSelection;
let playerSelection;


    function play(computerSelection,playerSelection){
        if(computerSelection === "ROCK" && playerSelection === "ROCK" || computerSelection === "PAPER"&& playerSelection ==="PAPER"|| computerSelection === "SCISSORS" && playerSelection === "SCISSORS"){
            console.log("Draw");
        }
        else if(computerSelection === "ROCK" && playerSelection === "PAPER")
        {
            console.log("You Win!!!");
        }
        else if( computerSelection === "ROCK" && playerSelection === "SCISSORS"){
            console.log("You Lose!!!")
        }
        else if(computerSelection === "PAPER"&& playerSelection === "SCISSORS")
        {
            console.log("You Win!!!");
        }
        else if( computerSelection === "PAPER"&& playerSelection === "ROCK"){
            console.log("You lose!!!")
        }
        else if(computerSelection === "SCISSORS" && playerSelection === "ROCK")
        {
            console.log("You Win!!!");
        }
        else if( computerSelection === "SCISSORS" && playerSelection === "PAPER"){
            console.log("You lose!!!")
        }
        else{
            console.log("Err")
        }
    
    }


function game()
{
    for(let i = 0; i < 5; i++)
    {
        
        playerSelection = playerPlay(prompt("Rock paper scissors?"));
        computerSelection = computerPlay();
        play(computerSelection,playerSelection);
   } 
       
}
