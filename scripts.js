var ALL_IMAGE_NAMES = ["Canger14", "EManger34", "JJhappy24", "MOhappy14"];
var HAPPY_CODINGS = [false, false, true, true];
// var ALL_IMAGE_NAMES = ["Canger14", "EManger34", "JJhappy24", "MFanger24", "MOhappy14", "NRhappy34", "PEanger14", "WFhappy14", "Chappy34", "EMhappy14", "JJanger34", "MOanger24", "MFhappy24", "NRanger14", "PEanger34", "SWanger24", "WFhappy34", "MOhappy14", "JJhappy24", "WFanger34"];
// var HAPPY_CODINGS = [false, false, true, false, true, true, false, true, true, true, false, false, true, false, false, false, true, true, true, false]
var allImages = [];
var NO_BIAS = 0;
var HAPPY_BIAS = 1;
var ANGRY_BIAS = 2;

var questionNumber = 0;
var overallCorrect = 0; 
var happyCorrect = 0;
var angryCorrect = 0;

function populateImages() {
	var imagesAsHTML = ""; 
	var i;
	imagesAsHTML = imagesAsHTML + "<img src='ebt_photos/"+ALL_IMAGE_NAMES[0]+".jpg'>";
	for (i=1; i<ALL_IMAGE_NAMES.length; i++) {
		imagesAsHTML = imagesAsHTML + "<img src='ebt_photos/"+ALL_IMAGE_NAMES[i]+".jpg' style='display: none'>";
	}
	document.getElementById("imageContainer").innerHTML = imagesAsHTML;
}

window.onload = function() {
	populateImages();
	allImages = document.getElementsByTagName("img");
    hideButton();
    displayNextQuestion();
}

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

function buttonPressed(userInput) {
	if (userInput == "Happy" && HAPPY_CODINGS[questionNumber]) {
		overallCorrect++;
		happyCorrect++;
	}
	else if (userInput == "Angry" && !HAPPY_CODINGS[questionNumber]) {
		overallCorrect++;
		angryCorrect++;
	}
	else {
		console.log("Wrong");
	}
	questionNumber++;
	hideButton();
	if (questionNumber < allImages.length) {
		allImages[questionNumber].style.display = "block";
		displayNextQuestion();
	}
	else {
		calculateScore(); 
	}
}

function calculateScore() {
	var overallFraction = overallCorrect / ALL_IMAGE_NAMES.length;
	// assumes that 1/2 of images are happy, 1/2 angry 
	var overallHappy = happyCorrect / (ALL_IMAGE_NAMES.length / 2);
	var overallAngry = angryCorrect / (ALL_IMAGE_NAMES.length / 2);
	console.log(overallFraction);
	console.log(overallHappy);
	console.log(overallAngry);
	var highOverall = (overallFraction > 0.75) ? true : false; // if overall correctness > 0.75, indicate it's a high overall score 
	if (overallHappy > overallAngry) { // pro-happy bias
		displayResults(highOverall, 1);
	}
	else if (overallHappy < overallAngry) { // pro-angry bias
		displayResults(highOverall, 2);
	}
	else { // no bias
		displayResults(highOverall, 0);
	}
}

function displayResults(highOverall, bias) {
	console.log("High overall? "+highOverall+" with bias of "+bias);
	if (highOverall) {
		if (bias == NO_BIAS) {
			window.location = "highoverall_nobias.html";
		}
		else if (bias == HAPPY_BIAS) {
			window.location = "highoverall_happybias.html";
		}
		else {
			window.location = "highoverall_angrybias.html";
		}
	} 
	else { // low overall 
		if (bias == NO_BIAS) {
			window.location = "lowoverall_nobias.html";
		}
		else if (bias == HAPPY_BIAS) {
			window.location = "lowoverall_happybias.html";
		}
		else {
			window.location = "lowoverall_angrybias.html";
		}
	}
}
