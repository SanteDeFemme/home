function getParams(){
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++){
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
	}
	return params;
}
window.onload() = submitToResults();
params = getParams();
age = unescape(params["age"]);
heightF = unescape(params["heightF"]);
heightI = unescape(params["heightI"]);
height = +(heightF * 12) + +heightI;
weight = unescape(params["weight"]);
gym = unescape(params["gym"]);
occupation = unescape(params["occupation"]);
diet = unescape(params["food"]);
bmi = (weight / (height * height)) * 703;
bmiStr = "";
if (bmi < 18.5) {
	bmiStr = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
	bmiStr = "Healthy";
} else if (bmi >= 25 && bmi <= 29.9) {
	bmiStr = "Overweight";
} else if (bmi => 30) {
	bmiStr = "Obese";
}
gymBool = false;
if (gym == "yes") {
	gymBool = true;
}
else if (gym == "no") {
	gymBool = false;
}

function submitToResults() {
var teststring="Test";

if (age < 18 && occupation == "student" && gym == "no") {
	document.getElementById("resultsPara").innerHTML = teststring;
}
var personA="StudentHome";
var personB="StudentGym";
var personC="WorkHome";
var personD="WorkGym";
}
	
