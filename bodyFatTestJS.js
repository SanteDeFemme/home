function findBodyFat() {
    var weight = document.getElementById("weight").value;
    var wrist = document.getElementById("wrist").value;
    var waist = document.getElementById("waist").value;
    var hip = document.getElementById("hip").value;
    var forearm = document.getElementById("forearm").value;
    var result1 = weight * 0.732;
    var result2 = +result1 + +8.987;
    var result3 = wrist / 3.14;
    var result4 = waist * 0.157;
    var result5 = hip * 0.249;
    var result6 = forearm * 0.434;
    var result7 = +result2 + +result3;
    var result8 = result7 - result4;
    var result9 = result8 - result5;
    var leanBodyMass = +result6 + +result9;
    var bodyFatPercentage = ((weight - leanBodyMass) * 100) / weight;
    document.getElementById("result").innerHTML = Math.round(bodyFatPercentage * 1000) / 1000;
    var noteString = "*Note - These are approxiamtions. Do not base your diet plan on this. This will not differ based on what you do, eg. Athlete, woman.\nIf you want a more accurate result, please try our body fat precentage calculator";
    document.getElementById("notesP").innerHTML = noteString;
}
