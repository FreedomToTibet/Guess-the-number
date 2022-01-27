'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const btnCheck = document.querySelector('.check'),
				btnAgain = document.querySelector('.again');
	let riddleNumber = Math.trunc((Math.random() * 20))+ 1;
	

	let infoMessage = document.querySelector('.message'),
			labelScore = document.querySelector('.score'),
			labelRiddleNumber = document.querySelector('.number'),
			gameScore = 20,
			gameHighScore = 0;

	
	// Check button event
	btnCheck.addEventListener('click', () => {

		const inputGuessNumber = Number(document.querySelector('.guess').value);
		
		// when there is no number
		if (!inputGuessNumber) {
			displayMessage("No number!");
		} // when number isn't in the interval
		else if (inputGuessNumber <= 0 || inputGuessNumber > 20) {
			displayMessage("Choose a right number");
		} //when guess is wrong
		else if (inputGuessNumber != riddleNumber) {
			displayMessage(inputGuessNumber > riddleNumber ?  "Too big" : "Too small");
			gameScore -=1;
			labelScore.textContent = gameScore;
		} // when player wins
		else {
			labelRiddleNumber.textContent === riddleNumber;
			displayMessage("You Win!");
			labelRiddleNumber.textContent = riddleNumber;
			document.querySelector('body').style.backgroundColor = '#60b347';
			if (gameScore > gameHighScore) {gameHighScore = gameScore};
			document.querySelector('.highscore').textContent = gameHighScore;
		}
		// click's score counter. when it is 0 you lose
		if (gameScore === 0) {
			displayMessage("You Lose!");
			btnCheck.textContent = "Game over";
			btnCheck.disabled = true;
		}
	});

	// Again button event
	btnAgain.addEventListener('click', () => {
		riddleNumber = Math.trunc((Math.random() * 20))+ 1;
		labelScore.textContent = "20";
		gameScore = 20;
		labelRiddleNumber.textContent = "?";
		displayMessage("Start guessing...");
		document.querySelector('.guess').value = "";
		btnCheck.textContent = "Check!";
		btnCheck.disabled = false;
		document.querySelector('body').style.backgroundColor = '#222222';
	});
	
	function displayMessage (message) {
		infoMessage.textContent = message;
	}
});