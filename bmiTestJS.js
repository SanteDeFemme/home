function findBmi() {
    var heightf = document.getElementById("heightF").value;
    var heighti = document.getElementById("heightI").value;
    var weight = document.getElementById("weight").value;
    var height = +(heightf * 12) + +heighti;
    var results = (weight / (height * height)) * 703;
    var resultsStr = "";
    document.getElementById("result").innerHTML = Math.round(results * 100) / 100;
    if (results < 18.5) {
        resultsStr = "Underweight";
    } else if (results >= 18.5 && results <= 24.9) {
        resultsStr = "Healthy";
    } else if (results >= 25 && results <= 29.9) {
        resultsStr = "Overweight";
    } else if (results => 30) {
        resultsStr = "Obese";
    }
    var noteString = "*Note - These are approxiamtions. Do not base your diet plan on this. This will not differ based on what you do, eg. Athlete, woman.";
    document.getElementById("note").innerHTML = noteString;
    document.getElementById("result").innerHTML += " - " + resultsStr;
}
