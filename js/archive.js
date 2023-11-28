 
function getComputerChoice() {

    const random = Math.floor(Math.random() * (4 - 1) + 1);

    if (random == 1) return "rock";
    if (random == 2) return "scissor";
    if (random == 3) return "paper";
};

function playRound(playerSelection, computerSelection) {

    const player = playerSelection;
    const pc = computerSelection;

    if (player == pc) {
        return "Draw";

    } else if ((player == "paper" && pc == "scissor") || 
               (player == "scissor" && pc == "paper")) {
        return "Scissor Wins";

    } else if ((player == "rock" && pc == "scissor") || 
               (player == "scissor" && pc == "rock")) {
        return "Rock Wins";

    } else if ((player == "paper" && pc == "rock") || 
               (player == "rock" && pc == "paper")) {
        return "Paper Wins";

    } else { 
        
        return "Something Went Wrong, The player chooses something that is not valid";
    }
}   


function game() {
    for (let i = 1; i <= 5; i++) {
        const trigger = prompt(`choose`);
    
        if ( trigger == null) {
            console.log(`aight, no problem`);
        
        } else {
            
            const playerSelection = trigger.toLowerCase();
            const computerSelection = getComputerChoice().toLowerCase();
            
            
            console.log(playRound(playerSelection, computerSelection));
            console.log(`The Player choose: ${playerSelection} \nThe Computer choose: ${computerSelection}`);    
        }
    }
}

game();