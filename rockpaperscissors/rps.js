var paper = document.getElementById('paper').addEventListener('click', playPaper);

function playPaper(){
    let playerSelection = 2;
    computerchoice = computerPlay();
    playRound(playerSelection, computerchoice);
}

var rock = document.getElementById('rock').addEventListener('click', playRock);

function playRock(){
    let playerSelection = 5;
    computerchoice = computerPlay();
    playRound(playerSelection, computerchoice);
}

var scissors = document.getElementById('scissors').addEventListener('click', playScissors);

function playScissors(){
    let playerSelection = 3;
    computerchoice = computerPlay();
    playRound(playerSelection, computerchoice);
}

  function computerPlay(){
    let computerchoice = 77;
    let computercalc = ((Math.random()-0.40001)/2*10);
    if (computercalc<1){
        computerchoice = 5; //rock
    }else if (computercalc<2){
        computerchoice = 2; //paper
    }else{
        computerchoice = 3; //scissors
    }


    console.log(`${computerchoice}thiscomputer`);
    return computerchoice;
    

  }

  function computerPlay2(){
    let computercalc = (Math.random()-0.40001)/2*10;
    if (computercalc<1){
        let computerchoice = 5; //rock
    }else if (computercalc<2){
        let computerchoice = 2; //paper
    }else{
        let computerchoice = 3; //scissors
    }


    console.log(computerchoice);
    return computerchoice;
    

  }
  
 

  const computerSelection = computerPlay();

  function playRound(playerSelection, computerSelection) {
    // your code here!
   
    /*let playerSelection;
    if (button.value === "rock"){
        playerSelection = 5;

    }else if (button.value === "paper"){
        playerSelection = 2; //paper
    }else if(button.value === '#scissors'){
        playerSelection = 3; //scissors

    }else{
        return;
    }*/



    let choice = playerSelection - computerSelection;
    

    console.log(choice);
    
            if (choice === 0){
                console.log("It\'s a tie!")
                document.getElementById('msg').textContent = 'It\'s a tie!';
                document.getElementById('yourScore').textContent = '1';
                    document.getElementById('cpScore').textContent = '1';
            }
            
        
            else if (choice === 1 || choice === -1){
                console.log("Scissors beats paper!");
                
                if (choice > 0){
                    console.log("You Win!");
                    document.getElementById('msg').textContent = 'Scissors beats paper! You Win!';
                    document.getElementById('yourScore').textContent = '1';
                    document.getElementById('cpScore').textContent = '0';
                }else {
                    console.log("You Lose!");
                    document.getElementById('msg').textContent = 'Scissors beats paper! You Lose!';
                    document.getElementById('yourScore').textContent = '0';
                    document.getElementById('cpScore').textContent = '1';
                }
            }
            
        
            else if (choice === 2 || choice === -2){
                console.log("Rock beats Scissors!");
                
                
                if (choice > 0){
                    console.log("You Win!");
                    document.getElementById('msg').textContent = 'Rock beats Scissors! You Win!';
                    document.getElementById('yourScore').textContent = '1';
                    document.getElementById('cpScore').textContent = '0';
                }else {
                    console.log("You Lose!");
                    document.getElementById('msg').textContent = 'Rock beats Scissors! You Lose!';
                    document.getElementById('yourScore').textContent = '0';
                    document.getElementById('cpScore').textContent = '1';
                }
            }
            
            
        
            else if (choice === 3 || choice === -3){
                console.log("Paper beats Rock!");
                if (choice < 0){
                    console.log("You Win!");
                    document.getElementById('msg').textContent = 'Paper beats Rock! You Win!';
                    document.getElementById('yourScore').textContent = '1';
                    document.getElementById('cpScore').textContent = '0';
                }else {
                    console.log("You Lose!");
                    document.getElementById('msg').textContent = 'Paper beats Rock! You Lose!';
                    document.getElementById('yourScore').textContent = '0';
                    document.getElementById('cpScore').textContent = '1';
                }
            }
            
        else{
            console.log("An error ocurred! Sorry.");
        }
    }
  
