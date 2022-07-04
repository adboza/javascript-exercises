

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
  
  let playerSelection = 3;

  const computerSelection = computerPlay();

  function playRound(playerSelection, computerSelection) {
    // your code here!
    let choice = playerSelection - computerSelection;
    

    console.log(choice);
    
            if (choice === 0){
                console.log("It\'s a tie!")
            }
            
        
            else if (choice === 1 || choice === -1){
                console.log("Scissors beats paper!");
                if (choice > 0){
                    console.log("You Win!");
                }else {
                    console.log("You Lose!");
                }
            }
            
        
            else if (choice === 2 || choice === -2){
                console.log("Rock beats Scissors!");
                if (choice > 0){
                    console.log("You Win!");
                }else {
                    console.log("You Lose!");
                }
            }
            
            
        
            else if (choice === 3 || choice === -3){
                console.log("Paper beats Rock!");
                if (choice < 0){
                    console.log("You Win!");
                }else {
                    console.log("You Lose!");
                }
            }
            
        else{
            console.log("An error ocurred! Sorry.");
        }
    }
  

  console.log(playRound(playerSelection, computerSelection));

  playerSelection = 2;
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = 5;
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = 2;
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = 5;
  console.log(playRound(playerSelection, computerSelection));