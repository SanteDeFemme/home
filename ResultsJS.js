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
firstname = unescape(params["firstname"]);
lastname = unescape(params["lastname"]);
age = unescape(params["age"]);
document.write("firstname = " + firstname + "<br>");
document.write("lastname = " + lastname + "<br>");
document.write("age = " + age + "<br>");
