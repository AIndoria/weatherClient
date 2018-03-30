var lat=0;
var lon=0;
var temperature=document.getElementById("temp");

if (!navigator.geolocation){
  temperature.innerHTML="Unsupported browser.";
}

function getLocation(callback){
  navigator.geolocation.getCurrentPosition(currentLocation);
  function currentLocation(position){
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    callback();
  }
}
function getAPI(){
  console.log("getAPI runs!");
  var request=new XMLHttpRequest();
  request.open("GET","https://cors-anywhere.herokuapp.com/api.darksky.net/forecast/cadf041a82953661109102821a085bfa/"+lat+","+lon); //Fix:DarkSky people are security twats and won't let me make requests becase unsecure api key. 
  request.onload=function getRequest(){
    var data=JSON.parse(request.responseText);
    console.log(data);
  }
  request.send();
}
getLocation(getAPI);