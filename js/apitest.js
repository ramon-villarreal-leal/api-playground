"use strict"

var myJSON = '{"name":"Steven", "age":28, "city":"San Francisco"}';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;