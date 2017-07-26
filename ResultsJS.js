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
params = getParams();
age = unescape(params["age"]);
heightF = unescape(params["heightF"]);
heightI = unescape(params["heightI"]);
height = +(heightF * 12) + +heightI;
weight = unescape(params["weight"]);
occupation = unescape(params["occupation"]);
diet = unescape(params["diet"]);
document.write("age = " + age + "<br>");
document.write("height = " + height + "<br>");
document.write("diet = " + diet + "<br>");
document.write("occupation = " + occupation + "<br>");
document.write("weight = " + weight + "<br>");
