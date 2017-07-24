function findBmi() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var result = (weight / (height * height)) * 703;
    document.getElementById("result").innerHTML = result;
}
