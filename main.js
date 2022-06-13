    // Your JavaScript goes here!
    let playerWins = 0;
    let computerWins = 0;

    let gameOver = false;

    let roundStatusStr = 0;

    const buttonContainer = document.querySelector('#buttonContainer');
    const rockControl = document.createElement('div');
    const paperControl = document.createElement('div');
    const scissorsControl = document.createElement('div');

    const startGameControl = document.querySelector('#startGameControl');
    startGameControl.style.display = 'flex';
    startGameControl.style.flexDirection = 'column';

    const playerScoreContainer = document.querySelector('#playerScoreContainer');
    const cpuScoreContainer = document.querySelector('#cpuScoreContainer');

    const statusDisplay = document.querySelector('#statusDisplay');
    const playerPickImg = document.querySelector('#playerPick img');
    const cpuPickImg = document.querySelector('#cpuPick img');

    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');
    const startBtn = document.createElement('button');

    const rockImage = document.createElement('img');
    const paperImage = document.createElement('img');
    const scissorsImage = document.createElement('img');

    const winSFX = new Audio('sfx/win.wav');
    const loseSFX = new Audio('sfx/lose.wav');
    const startBtnSFX = new Audio('sfx/startButton.wav');
    const rpsBtnSFX = new Audio('sfx/rpsButton.wav');

    let buttons = 0;

    const rpsImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];

    function initControls()
    {
        rockBtn.classList.add('rockBtn');
        rockBtn.textContent = 'ROCK';
        rockImage.classList.add('rockImage');
        rockImage.style.width = '100px';
        rockImage.style.height = '100px';
        rockImage.src = rpsImages[0];

        paperBtn.classList.add('paperBtn');
        paperBtn.textContent = "PAPER";
        paperImage.classList.add('paperImage');
        paperImage.style.width = '100px';
        paperImage.style.height = '100px';
        paperImage.src = rpsImages[1];

        scissorsBtn.classList.add('scissorsBtn');
        scissorsBtn.textContent = "SCISSORS";
        scissorsImage.classList.add('scissorsImage');
        scissorsImage.style.width = '100px';
        scissorsImage.style.height = '100px';
        scissorsImage.src = rpsImages[2];

        startBtn.classList.add('startBtn');
        startBtn.textContent = 'Start Game';
        startBtn.style.display = 'flex';
        startBtn.style.width = '110px';
        startBtn.style.height = '32px';
        startBtn.style.justifyContent = 'center';
        startBtn.style.alignItems = 'center';
        startBtn.style.fontSize = '16px';
        startBtn.style.fontWeight = 'bolder';

        rockControl.style.flexDirection = 'column';
        rockControl.appendChild(rockImage);
        rockControl.appendChild(rockBtn);

        paperControl.style.flexDirection = 'column';
        paperControl.appendChild(paperImage);
        paperControl.appendChild(paperBtn);

        scissorsControl.style.flexDirection = 'column';
        scissorsControl.appendChild(scissorsImage);
        scissorsControl.appendChild(scissorsBtn);

        buttonContainer.appendChild(rockControl);
        buttonContainer.appendChild(paperControl);
        buttonContainer.appendChild(scissorsControl);

        rockControl.style.display = 'none';
        paperControl.style.display = 'none';
        scissorsControl.style.display = 'none';
        startGameControl.style.display = 'flex';

        startGameControl.appendChild(startBtn);
        buttonContainer.appendChild(startGameControl);

        statusDisplay.textContent = 'Do you want to play?';

        buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {
            if(button.className != 'startBtn')
            {
                button.addEventListener('click', () => {
                    rpsBtnSFX.pause();
                    rpsBtnSFX.currentTime = 0;
                    rpsBtnSFX.play();
                    statusDisplay.textContent = playRound(button.textContent, computerMakeSelction());
                });
            }
        });
    }

    function initializeGui()
    {
        initControls();

        startBtn.addEventListener('click', () => {
                startBtnSFX.play();
                startGame();
            });
    }

    function startGame()
    {   
        playerWins = 0;
        computerWins = 0;

        startGameControl.style.display = 'none';
        rockControl.style.display = 'flex';
        paperControl.style.display = 'flex';
        scissorsControl.style.display = 'flex';

        statusDisplay.textContent = 'Choose ROCK, PAPER, or SCISSORS';
        playerScoreContainer.textContent = `Player: ${playerWins}`;
        cpuScoreContainer.textContent = `CPU: ${computerWins}`;
    }
    
    function endGame()
    {
        rockControl.style.display = 'none';
        paperControl.style.display = 'none';
        scissorsControl.style.display = 'none';
        let winnerStr = '';

        if(playerWins == 5)
        {
            winSFX.play();
            winnerStr = 'YOU WON THE GAME!';
        }
        else if (computerWins == 5)
        {
            loseSFX.play();
            winnerStr = 'YOU LOST THE GAME!';
        }

        startGameControl.style.display = 'flex';

        return `${winnerStr} Play again?`;
    }

    function changeSelectionImage(playerSelection, computerSelection)
    {
        if(playerSelection == 'ROCK')
        {
            playerPickImg.src = rpsImages[0];
        }
        else if (playerSelection == 'PAPER')
        {
            playerPickImg.src = rpsImages[1];
        }
        else if (playerSelection == 'SCISSORS')
        {
            playerPickImg.src = rpsImages[2];
        }

        if(computerSelection == 'ROCK')
        {
            cpuPickImg.src = rpsImages[0];
        }
        else if (computerSelection == 'PAPER')
        {
            cpuPickImg.src = rpsImages[1];
        }
        else if (computerSelection == 'SCISSORS')
        {
            cpuPickImg.src = rpsImages[2];
        }
    }

    function computerMakeSelction(playerSelection, computerSelection)
    {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        if(randomNumber == 1)
        {
            computerSelection = 'ROCK';
        }
        else if(randomNumber == 2)
        {
            computerSelection = 'PAPER';
        }
        else if(randomNumber == 3)
        {
            computerSelection = 'SCISSORS';
        }

        return computerSelection;
    }

    function checkRoundWin(playerSelection, computerSelection)
    {
        let statusStr = '';
        if(playerSelection == computerSelection)
        {
            statusStr = 'You Tied!';
        }
        else
        {
            if(playerSelection == 'ROCK')
            {
                if(computerSelection == 'PAPER')
                {
                    computerWins++;
                    cpuScoreContainer.textContent = `CPU: ${computerWins}`;
                    statusStr = `You Lose! ${computerSelection} beats ${playerSelection}!`;
                }
                else if(computerSelection == 'SCISSORS')
                {
                    playerWins++;
                    playerScoreContainer.textContent = `Player: ${playerWins}`;
                    statusStr = `You Win! ${playerSelection} beats ${computerSelection}!`;
                }
            }
            if(playerSelection == 'PAPER')
            {
                if(computerSelection == 'SCISSORS')
                {
                    computerWins++;
                    cpuScoreContainer.textContent = `CPU: ${computerWins}`;
                    statusStr = `You Lost! ${computerSelection} beats ${playerSelection}!`;
                }
                else if(computerSelection == 'ROCK')
                {
                    playerWins++;
                    playerScoreContainer.textContent = `Player: ${playerWins}`;
                    statusStr = `You Won! ${playerSelection} beats ${computerSelection}!`;
                }
            }
            if(playerSelection == 'SCISSORS')
            {
                if(computerSelection == 'ROCK')
                {
                    computerWins++;
                    cpuScoreContainer.textContent = `CPU: ${computerWins}`;
                    statusStr = `You Lost! ${computerSelection} beats ${playerSelection}!`;
                }
                else if(computerSelection == 'PAPER')
                {
                    playerWins++;
                    playerScoreContainer.textContent = `Player: ${playerWins}`;
                    statusStr = `You Won! ${playerSelection} beats ${computerSelection}!`;
                }
            }
        }
        if(playerWins >= 5 || computerWins >= 5)
            return endGame();

        return statusStr;
    }

    function playRound(playerSelection, computerSelection) {
        // your code here!
        changeSelectionImage(playerSelection, computerSelection);
        roundStatusStr = checkRoundWin(playerSelection, computerSelection);
        return roundStatusStr;
    }

    initializeGui();
