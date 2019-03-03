var allImages = [];
var questionNumber = 0;
var allUserInput = [];

function showButton() {
    document.getElementById("happyButton").style.visibility = "visible";
    document.getElementById("angryButton").style.visibility = "visible";
}

function hideButton() {
    document.getElementById("happyButton").style.visibility = "hidden";
    document.getElementById("angryButton").style.visibility = "hidden";
}

function displayNextQuestion() {
	setTimeout("allImages[questionNumber].style.display='none';", 1000);
	setTimeout('showButton()', 1000);
}

window.onload = function() {
	allImages = document.getElementsByTagName("img");
    hideButton();
    displayNextQuestion();
}

function buttonPressed(userInput) {
	allUserInput.push(userInput);
	console.log(allUserInput);
	questionNumber++;
	if (questionNumber < allImages.length) {
		allImages[questionNumber].style.display = "block";
		hideButton();
		displayNextQuestion();
	}
}

