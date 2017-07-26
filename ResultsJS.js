params = getParams();
age = unescape(params["age"]);
weight = unescape(params["weight"]);
height = unescape(params["height"]);
document.write("age = " + age + "<br>");
document.write("weight = " + weight + "<br>");
document.write("height = " + height + "<br>");
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
  document.getElementById("resultsPara").innerHTML = age;
  return params;
}
