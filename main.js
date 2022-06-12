    // Your JavaScript goes here!
    let playerWins = 0;
    let computerWins = 0;

    // const container = document.querySelector('#container');

    // // Create Buttons for Rock, Paper, Scissors
    // let rockBtn = document.createElement("button"); 
    // rockBtn.classList.add('rockBtn');
    // rockBtn.textContent = 'ROCK';

    // let paperBtn = document.createElement("button");
    // paperBtn.classList.add('paperBtn');
    // paperBtn.textContent = "PAPER";

    // let scissorsBtn = document.createElement("button");
    // scissorsBtn.classList.add('scissorsBtn');
    // scissorsBtn.textContent = "SCISSORS";
    
    // container.appendChild(rockBtn);
    // container.appendChild(paperBtn);
    // container.appendChild(scissorsBtn);

    // const buttons = document.querySelectorAll('button');
    // buttons.forEach((button) => {
    //     button.disabled = true;
    // });

    function startGame()
    {
        playerWins = 0;
        computerWins = 0;

        gameTally.textContent = `PLAYER SCORE: ${playerWins} -VS- COMPUTER SCORE: ${computerWins}`;
        playerChoice.textContent = 'Player: ' + 'NONE';
        computerChoice.textContent = 'Computer: ' + 'NONE';
        result.textContent = 'Choose ROCK, PAPER, or SCISSORS';

        // buttons.forEach((button) => {
        //     button.disabled = false;
        // });
    }

    function computerMakeSelction()
    {
        let computerSelection = "";
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if(randomNumber <= 33)
        {
            computerSelection = 'ROCK';
        }
        else if(randomNumber > 33 && randomNumber <= 66)
        {
            computerSelection = 'PAPER';
        }
        else
        {
            computerSelection = 'SCISSORS';
        }

        return computerSelection;
    }

    function playRound(playerSelection, computerSelection) {
        // your code here!
        playerChoice.textContent = 'Player: ' + playerSelection;
        computerChoice.textContent = 'Computer: ' + computerSelection;

        gameState.appendChild(playerChoice);
        gameState.appendChild(computerChoice);

        if(playerSelection == computerSelection)
        {
            return 'You Tied!';
        }
        else
        {
            if(playerSelection == 'ROCK')
            {
                if(computerSelection == 'PAPER')
                {
                    computerWins++;
                    gameTally.textContent = `PLAYER SCORE: ${playerWins} -VS- COMPUTER SCORE: ${computerWins}`;
                    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
                }
                else if(computerSelection == 'SCISSORS')
                {
                    playerWins++;
                    gameTally.textContent = `PLAYER SCORE: ${playerWins} -VS- COMPUTER SCORE: ${computerWins}`;
                    return `You Win! ${playerSelection} beats ${computerSelection}!`;
                }
            }
            if(playerSelection == 'PAPER')
            {
                if(computerSelection == 'SCISSORS')
                {
                    computerWins++;
                    gameTally.textContent = `PLAYER SCORE: ${playerWins} -VS- COMPUTER SCORE: ${computerWins}`;
                    return `You Lost! ${computerSelection} beats ${playerSelection}!`;
                }
                else if(computerSelection == 'ROCK')
                {
                    playerWins++;
                    gameTally.textContent = `PLAYER SCORE: ${playerWins} -VS- COMPUTER SCORE: ${computerWins}`;
                    return `You Won! ${playerSelection} beats ${computerSelection}!`;
                }
            }
            if(playerSelection == 'SCISSORS')
            {
                if(computerSelection == 'ROCK')
                {
                    computerWins++;
                    gameTally.textContent = `PLAYER SCORE: ${playerWins} -VS- COMPUTER SCORE: ${computerWins}`;
                    return `You Lost! ${computerSelection} beats ${playerSelection}!`;
                }
                else if(computerSelection == 'PAPER')
                {
                    playerWins++;
                    gameTally.textContent = `PLAYER SCORE: ${playerWins} -VS- COMPUTER SCORE: ${computerWins}`;
                    return `You Won! ${playerSelection} beats ${computerSelection}!`;
                }
            }
        }
    }