
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
lastname = unescape(params["weight"]);
occupation = unescape(params["occupation"]);
document.write("age = " + age + "<br>");
document.write("occupation = " + occupation + "<br>");
document.write("weight = " + weight + "<br>");
