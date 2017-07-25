function surveyFunction() {
   var age = document.getElementById("age").value;
   var weight = document.getElementById("weight").value;
   var heightf = document.getElementById("heightF").value;
   var heighti = document.getElementById("heightI").value;
   var height = +(heightf * 12) + +heighti;
   var occupation = document.getElementById("occupation").value;
   var food = document.getElementById("food").value;
}
