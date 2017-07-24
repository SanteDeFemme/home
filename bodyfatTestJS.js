function findBmi() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var results = (weight / (height * height)) * 703;
    var resultsStr = "";
    document.getElementById("result").innerHTML = Math.round(results * 100) / 100;
    if (results < 18.5) {
        resultsStr = "Underweight";
    } else if (results >= 18.5 && results <= 24.9) {
        resultsStr = "Healthy";
    } else if (results >= 25 && results <= 29.9) {
        resultsStr = "Healthy";
    } else if (results => 30) {
        resultsStr = "Healthy";
    }
    document.getElementById("result").innerHTML += " - " + resultsStr;
}
