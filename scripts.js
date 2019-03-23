// CONSTANTS
var ALL_IMAGE_NAMES = ["PFhappy20", "Canger20", "PFhappy58", "SWanger20", "WFanger20", "MOhappy20", "WFhappy58", "MOhappy58", "MOanger20", "PEhappy20", "WFanger58", "PEhappy58", "EManger20", "JJhappy58", "Chappy20", "Canger58", "NRhappy20", "SWhappy20", "Chappy58", "JJanger58", "JJhappy20", "MOanger58", "PEanger20", "PFanger20", "EMhappy58", "NRanger20", "NRanger58", "SWhappy58", "PFanger58", "NRhappy58", "PEanger58", "SWanger58", "JJanger20", "WFhappy20"];
var CODINGS = ["Happy", "Angry", "Happy", "Angry", "Angry", "Happy", "Happy", "Happy", "Angry", "Happy", "Angry", "Happy", "Angry", "Happy", "Happy", "Angry", "Happy", "Happy", "Happy", "Angry", "Happy", "Angry", "Angry", "Angry", "Happy", "Angry", "Angry", "Happy", "Angry", "Happy", "Angry", "Angry", "Angry", "Happy"];
var NO_BIAS = 0;
var HAPPY_BIAS = 1;
var ANGRY_BIAS = 2;
var CORRECTNESS_THRESHOLD = 0.75;
var HAPPY_INDICATOR = "Happy";
var ANGRY_INDICATOR = "Angry";

// VARS THAT CHANGE
var allImages = [];
var questionNumber = 0;
var overallCorrect = 0; 
var happyCorrect = 0;
var angryCorrect = 0;

window.onload = function() {
	hideButton();
	populateImages();
	allImages = document.getElementsByTagName("img");
    displayNextQuestion();
}

function populateImages() {
	var imagesAsHTML = ""; 
	var i;

	imagesAsHTML = imagesAsHTML + "<img src='ebt_photos/"+ALL_IMAGE_NAMES[0]+".jpg' class='center'>";
	for (i=1; i<ALL_IMAGE_NAMES.length; i++) {
		imagesAsHTML = imagesAsHTML + "<img src='ebt_photos/"+ALL_IMAGE_NAMES[i]+".jpg' class='center' style='display: none'>";
	}
	document.getElementById("imageContainer").innerHTML = imagesAsHTML;
}

function showButton() {
    document.getElementById("happyButton").style.visibility = "visible";
    document.getElementById("angryButton").style.visibility = "visible";
}

function hideButton() {
    document.getElementById("happyButton").style.visibility = "hidden";
    document.getElementById("angryButton").style.visibility = "hidden";
}

function recordInput(userInput) {
	if (userInput == CODINGS[questionNumber]) {
		overallCorrect++;
		if (userInput == HAPPY_INDICATOR) {
			happyCorrect++;
		}
		else {
			angryCorrect++;
		}
	}
	prepareNextQuestion();
}

function prepareNextQuestion() {
	questionNumber++;
	hideButton();
	if (questionNumber < allImages.length) {
		allImages[questionNumber].style.display = "block";
		displayNextQuestion();
	}
	else {
		calculateResults(); 
	}
}

function displayNextQuestion() {
	setTimeout("allImages[questionNumber].style.display='none';", 1000);
	setTimeout('showButton()', 1000);
}

function calculateResults() {
	var overallFraction = overallCorrect / ALL_IMAGE_NAMES.length;
	// assumes that 1/2 of images are happy, 1/2 angry 
	var overallHappy = happyCorrect / (ALL_IMAGE_NAMES.length / 2);
	var overallAngry = angryCorrect / (ALL_IMAGE_NAMES.length / 2);
	var highOverall = (overallFraction > CORRECTNESS_THRESHOLD) ? true : false; // if overall correctness > 0.75, indicate it's a high overall score 
	if (overallHappy > overallAngry) { // pro-happy bias
		displayResults(highOverall, HAPPY_BIAS);
	}
	else if (overallAngry > overallHappy) { // pro-angry bias
		displayResults(highOverall, ANGRY_BIAS);
	}
	else { // no bias
		displayResults(highOverall, NO_BIAS);
	}
}

function displayResults(highOverall, bias) {
	if (highOverall) {
		if (bias == NO_BIAS) {
			window.location = "HO_NB.html";
		}
		else if (bias == HAPPY_BIAS) {
			window.location = "HO_HB.html";
		}
		else {
			window.location = "HO_AB.html";
		}
	} 
	else { // low overall 
		if (bias == NO_BIAS) {
			window.location = "LO_NB.html";
		}
		else if (bias == HAPPY_BIAS) {
			window.location = "LO_HB.html";
		}
		else {
			window.location = "LO_AB.html";
		}
	}
}
