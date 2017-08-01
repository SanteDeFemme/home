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
var personA="School can be time consuming, so in between your course load you can try these exercises. You can also stay active by joining a school team! . Remember it is important to also maintain this routine with a healthy diet and mental health.
https://www.rodalewellness.com/fitness/bodyweight-exercises
http://www.womenshealthmag.com/fitness/home-workouts
http://www.shape.com/fitness/workouts/ultimate-home-workout
https://www.popsugar.com/fitness/Printable-Total-Body--Equipment-Workout-2058846
";
var personB="If you are able to go to the gym, you can try these exercises. Remember to take at least one day of rest per week to let your body relax. Remember it is important to also maintain this routine with a healthy diet and mental health.
https://www.bodybuilding.com/content/ultimate-beginners-machine-workout-for-women.html
http://www.shape.com/fitness/workouts/4-week-weight-training-plan-women
Try this body shape specific workout routine!
 http://www.womenshealthmag.com/fitness/best-workout-for-your-body-type
";
var personC=" If you are busy with work, try these at home exercises to keep up a fitness routine. Remember to take at least one day of rest per week to let your body relax. Remember it is important to also maintain this routine with a healthy diet and mental health.

https://www.rodalewellness.com/fitness/bodyweight-exercises
http://www.womenshealthmag.com/fitness/home-workouts
http://www.shape.com/fitness/workouts/ultimate-home-workout
https://www.popsugar.com/fitness/Printable-Total-Body--Equipment-Workout-2058846

";
var personD="Based on your work schedule, you can find time for a gym membership. Remember to take at least one day of rest per week to let your body relax. Remember it is important to also maintain this routine with a healthy diet and mental health.

https://www.bodybuilding.com/content/ultimate-beginners-machine-workout-for-women.html
http://www.shape.com/fitness/workouts/4-week-weight-training-plan-women
Try this body shape specific workout routine!
 http://www.womenshealthmag.com/fitness/best-workout-for-your-body-type
";
if (occupation == "student" && gym == "no") {
	 resultsStr = "personA";
}if (occupation == "student" && gym == "yes") {
	 resultsStr = "personB";
}if (occupation == "work" && gym == "no") {
	 resultsStr = "personC";
}if (occupation == "work" && gym == "yes") {
	 resultsStr = "personD";
}
}
	
