function getParams(){
	var idx = document.URL.indexOf('?');
	this.params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++){
			nameVal = pairs[i].split('=');
			this.params[nameVal[0]] = nameVal[1];
		}
		return params;
	
	}
}
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

function submitToResults() {
	this.resultsStr = "";
	this.resultsFood = "";
	var personA = "School can be time consuming, so in between your course load you can try these exercises.\
	You can also stay active by joining a school team! You can use these exercises for different days, to work out different\
	muscles. While you may have a specific fitness goal in mind, it is important to do entire body workouts to maintain a proper and healthy \
	physique while you are still growing. While these at home workouts can make stronger, remember it is important to also maintain this \
	routine with a healthy diet and mental health. The best way to approach exercise is consistency, create a plan of exercise according to you schedule. \
	<a href='https://www.rodalewellness.com/fitness/bodyweight-exercises'>Exercise 1</a> \
	<a href='http://www.womenshealthmag.com/fitness/home-workouts'>Exercise 2</a> \
	<a href='http://www.shape.com/fitness/workouts/ultimate-home-workout'>Exercise 3</a> \
	<a href='https://www.popsugar.com/fitness/Printable-Total-Body--Equipment-Workout-2058846'>Exercise 4</a>";
	
	var personB = "If you are able to go to the gym, you can try these exercises. Remember to take at least one day of rest per week to \
	let your body relax. While you may see others with rigorous workouts, remember to start off with less intense workouts and continue to \
	increase the difficulty. It is important to also maintain this routine with a healthy diet and mental health. The best way to approach \
	exercise is consistency, create a plan of exercise according to you schedule. \
	<a href='https://www.bodybuilding.com/content/ultimate-beginners-machine-workout-for-women.html'>Exercise 1</a> \
	<a href='http://www.shape.com/fitness/workouts/4-week-weight-training-plan-women'>Exercise 2</a> \
	<a href='http://www.womenshealthmag.com/fitness/best-workout-for-your-body-type'>Try this body shape specific workout routine!</a>";
	
	var personC = "If you are busy with work, try these at home exercises to keep up a fitness routine. You can use these exercises for \
	different days, to work out different muscles. Especially with a work schedule, it is important to stay active between hours in order \
	to prevent any pain or physical stress. Remember it is important to also maintain this routine with a healthy diet and mental health. \
	The best way to approach exercise is consistency, create a plan of exercise according to you schedule. \
	<a href='https://www.rodalewellness.com/fitness/bodyweight-exercises'>Exercise 1</a> \
	<a href='http://www.womenshealthmag.com/fitness/home-workouts'>Exercise 2</a> \
	<a href='http://www.shape.com/fitness/workouts/ultimate-home-workout'>Exercise 3</a> \
	<a href='https://www.popsugar.com/fitness/Printable-Total-Body--Equipment-Workout-2058846'>Exercise 4</a>";

	var personD = "Based on your work schedule, you can find time for a gym membership. Always take at least one day of rest per week to \
	let your body relax. While you may see others with rigorous workouts, remember to start off with less intense workouts and continue \
	to increase the difficulty. Remember it is important to also maintain this routine with a healthy diet and mental health. The best way \
	to approach exercise is consistency, create a plan of exercise according to you schedule. \
	<a href='https://www.bodybuilding.com/content/ultimate-beginners-machine-workout-for-women.html'>Exercise 1</a> \
	<a href='http://www.shape.com/fitness/workouts/4-week-weight-training-plan-women'>Exercise 2</a> \
	<a href='http://www.womenshealthmag.com/fitness/best-workout-for-your-body-type'>Try this body shape specific workout routine!</a>";
	
	var vegan = "While a Vegan diet is proven to be healthy, it is important to eat in proper quantities. Protein, Calcium, and \
	Omega3 supplements in various foods are important to maintain your health. These food options are helpful in planning out your meals.\
	<a href='https://www.peta.org/living/food/two-week-vegan-meal-plan/'>Meal Plan 1</a> \
	<a href='https://www.realsimple.com/food-recipes/recipe-collections-favorites/healthy-meals/easy-vegan-recipes'>Meal Plan 2</a> \
	<a href='http://www.seriouseats.com/2016/03/vegan-meal-plan.html'>Meal Plan 3</a>";
	
	var veg = "These meal plans below can help you get started on planning a proper diet. In order to prevent any deficiencies in protein \
	or other substances, you can plan out your meals to include healthy foods specific to your needs. \
	<a href='http://www.cookinglight.com/food/vegetarian/vegetarian-meals'>Meal Plan 1</a> \
	<a href='http://allrecipes.com/recipes/87/everyday-cooking/vegetarian/'>Meal Plan 2</a> \
	<a href='http://www.countryliving.com/food-drinks/g1186/vegetarian-recipes-0309/'>Meal Plan 3</a>";
	
	var nonveg = "These meal plans below can help you get started on planning a proper diet. If there are no dietary restrictions, \
	take advantage of this and eat healthy foods from all sources. \
	<a href='http://www.thehealthsite.com/fitness/diet-chart-and-tips-for-non-vegetarians/'>Meal Plan 1</a> \
	<a href='http://www.indiatimes.com/health/tips-tricks/nonvegetarian-diet-plan-7-days-weight-loss-diet-236826.html'>Meal Plan 2</a> \
	<a href='http://www.livestrong.com/article/198340-how-to-plan-a-non-vegetarian-diet/'>Meal Plan 3</a>";


	if (this.occupation == "student" && this.gym == "no") {
		 this.resultsStr = personA;
	} else if (this.occupation == "student" && this.gym == "yes") {
		 this.resultsStr = personB;
	} else if (this.occupation == "work" && this.gym == "no") {
		 this.resultsStr = personC;
	} else if (this.occupation == "work" && this.gym == "yes") {
	 this.resultsStr = personD;
	}
	if (this.diet == "vegan") {
		this.resultsSFood = vegan;
	} else if (this.diet == "veg") {
		this.resultsFood = veg;
	} else if (this.diet == "nonveg") {
		this.resultsFood = nonveg;
	}
}

	
window.onload = function() {
	document.getElementById("resultsPara").innerHTML = this.resultsStr;
	document.getElementById("resultsPara").innerHTML = this.resultsFood;
}
