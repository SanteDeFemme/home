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
function submitted() {
	params = getParams();
	this.age = unescape(params["age"]);
	this.heightF = unescape(params["heightF"]);
	this.heightI = unescape(params["heightI"]);
	this.height = +(heightF * 12) + +heightI;
	this.weight = unescape(params["weight"]);
	this.gym = unescape(params["gym"]);
	this.occupation = unescape(params["occupation"]);
	this.diet = unescape(params["food"]);
	this.bmi = (weight / (height * height)) * 703;
	this.bmiStr = "";
	if (this.bmi < 18.5) {
		this.bmiStr = "Underweight";
	} else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
		this.bmiStr = "Healthy";
	} else if (this.bmi >= 25 && this.bmi <= 29.9) {
		this.bmiStr = "Overweight";
	} else if (bmi => 30) {
		this.bmiStr = "Obese";
	}
	this.gymBool = false;
	if (this.gym == "yes") {
		this.gymBool = true;
	}
	else if (this.gym == "no") {
		this.gymBool = false;
	}
	submitToResults();
	}

function submitToResults() {
	var resultsStr = "";
	var personA = "School can be time consuming, so in between your course load you can try these exercises. You can also stay \
	active by joining a school team! . Remember it is important to also maintain this routine with a healthy diet and mental \
	health. https://www.rodalewellness.com/fitness/bodyweight-exercises \
	http://www.womenshealthmag.com/fitness/home-workouts \
	http://www.shape.com/fitness/workouts/ultimate-home-workout \
	https://www.popsugar.com/fitness/Printable-Total-Body--Equipment-Workout-2058846";
	
	var personB = "If you are able to go to the gym, you can try these exercises. Remember to take at least one day of rest per \
	week to let your body relax. Remember it is important to also maintain this routine with a healthy diet and mental health. \
	https://www.bodybuilding.com/content/ultimate-beginners-machine-workout-for-women.html \
	http://www.shape.com/fitness/workouts/4-week-weight-training-plan-women \
	Try this body shape specific workout routine! \
	http://www.womenshealthmag.com/fitness/best-workout-for-your-body-type";
	
	var personC = "If you are busy with work, try these at home exercises to keep up a fitness routine. Remember to take at \
	least one day of rest per week to let your body relax. Remember it is important to also maintain this routine with a healthy \
	diet and mental health. \
	https://www.rodalewellness.com/fitness/bodyweight-exercises \
	http://www.womenshealthmag.com/fitness/home-workouts \
	http://www.shape.com/fitness/workouts/ultimate-home-workout \
	https://www.popsugar.com/fitness/Printable-Total-Body--Equipment-Workout-2058846";

	var personD = "Based on your work schedule, you can find time for a gym membership. Remember to take at least one day of rest \
	per week to let your body relax. Remember it is important to also maintain this routine with a healthy diet and mental health. \
	https://www.bodybuilding.com/content/ultimate-beginners-machine-workout-for-women.html \
	http://www.shape.com/fitness/workouts/4-week-weight-training-plan-women \
	Try this body shape specific workout routine! \
	http://www.womenshealthmag.com/fitness/best-workout-for-your-body-type";
	if (this.occupation == "student" && this.gym == "no") {
		 resultsStr = "personA";
	} else if (this.occupation == "student" && this.gym == "yes") {
		 resultsStr = "personB";
	} else if (this.occupation == "work" && this.gym == "no") {
		 resultsStr = "personC";
	} else if (this.occupation == "work" && this.gym == "yes") {
	 resultsStr = "personD";
	}
	document.getElementById("resultsPara").innerHTML = resultsStr;
}
	
