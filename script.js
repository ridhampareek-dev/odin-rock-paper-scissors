 console.log("Hello World");

        function getComputerChoice() {
            const randomIndex = Math.random();

            if(randomIndex >= 0&&randomIndex < 1/3){
                return "rock";
            }if(randomIndex >= 1/3&&randomIndex < 2/3){
                return "paper";
            
            } (randomIndex >= 2/3&&randomIndex < 1)
              return "scissors";
        }

        function getHumanChoice() {
            const userInput = prompt("Please enter rock, paper, or scissors:");
            if (userInput === null) {
             return "rock";
            }
            return userInput.toLowerCase();
        }

        function playGame(){
            let humanScore = 0;
            let computerScore = 0;

            function playRound(humanChoice, computerChoice) {
                if (humanChoice === computerChoice) {
                    return `It's a tie! Both chose ${humanChoice}`;
                }
                if (
                    (humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "paper" && computerChoice === "rock") ||
                    (humanChoice === "scissors" && computerChoice === "paper")
                ) {
                    humanScore++;
                    return `You win! ${humanChoice} beats ${computerChoice}`;

                } 
                    computerScore++;
                    return `You lose! ${computerChoice} beats ${humanChoice}`;
            }
      
            for (let i = 0; i < 5; i++) {
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();

                console.log(`Round ${i + 1}`);
                console.log(`Human: ${humanSelection}`);
                console.log(`Computer: ${computerSelection}`);

                console.log(
                    playRound(humanSelection, computerSelection)
                );

                console.log(
                    `Score -> Human: ${humanScore}, Computer: ${computerScore}`
                );
            }

            if (humanScore > computerScore) {
                console.log(`You won the game! (${humanScore} - ${computerScore})`);
            } else if (computerScore > humanScore) {
                console.log(`Computer won the game! (${computerScore} - ${humanScore})`);
            }else {
                console.log(`The game is a tie! (${humanScore} - ${computerScore})`);
            }  
        }  
     playGame();