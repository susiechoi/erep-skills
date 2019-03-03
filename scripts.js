var ALL_IMAGE_NAMES = ["Canger14", "EManger34", "JJhappy24", "MFanger24", "MOhappy14", "NRhappy34", "PEanger14", "WFhappy14", "Chappy34", "EMhappy14", "JJanger34", "MOanger24", "MFhappy24", "NRanger14", "PEanger34", "SWanger24", "WFhappy34", "MOhappy14", "JJhappy24", "WFanger34"];
var HAPPY_CODINGS = [false, false, true, false, true, true, false, true, true, true, false, false, true, false, false, false, true, true, true, false]
var allImages = [];

var questionNumber = 0;
// var allUserInput = [];
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

function calculateScore() {
	var overallFraction = overallCorrect / ALL_IMAGE_NAMES.length;
	var overallHappy = happyCorrect / ALL_IMAGE_NAMES.length;
	var overallAngry = angryCorrect / ALL_IMAGE_NAMES.length;
	console.log(overallFraction);
	console.log(overallHappy);
	console.log(overallAngry);
}

window.onload = function() {
	populateImages();
	allImages = document.getElementsByTagName("img");
    hideButton();
    displayNextQuestion();
}

function buttonPressed(userInput) {
	// allUserInput.push(userInput);
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
	if (questionNumber < allImages.length) {
		allImages[questionNumber].style.display = "block";
		hideButton();
		displayNextQuestion();
	}
	else {
		calculateScore(); 
	}
}

