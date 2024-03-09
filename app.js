const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");


let winningScore = 3;
let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) { // Here we can also use isGameOver === false rather than !isGameOver
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }

}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})


p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);//We have to use parseInt because from this.value the value we get is a string
    reset();// We are calling function reset here cause if we want to change the select value in between clicking the button it will reset the players score
})


resetButton.addEventListener('click', reset);//When the reset button is clicked, execute the reset function." There's no need for the parentheses after reset in this context.

function reset() {
    isGameOver = false;

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;

    }

}