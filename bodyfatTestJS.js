function findBmi() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var results = (weight / (height * height)) * 703;
    document.getElementById("result").innerHTML = Math.round(results * 100) / 100;
}
