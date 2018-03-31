var lat=0;
var lon=0;


if (!navigator.geolocation){
  document.getElementById("temp").innerHTML="Unsupported browser.";
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
  request.open("GET","https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=c1296f15eea7845f1241a75064554106&units=metric"); 
  request.onload=function getRequest(){
    var data=JSON.parse(request.responseText);
    console.log(data);
    plugInfo(data);
  }
  request.send();
}
getLocation(getAPI);

function plugInfo(requestData){
  var temperature=document.getElementById("temp");
  console.log("Plug info runs");
  temperature.insertAdjacentHTML("beforeend",requestData.main.temp);
  let loc=document.getElementById("location");
  loc.innerHTML=requestData.name;


}

function changeUnits(){
  let toggle=0;
  let unit=document.getElementById("units").innerHTML;
  console.log(unit);
  if(unit==="℃"){
    toggle=1;
    console.log("Unit C toggle");
  }
  else{
    toggle=0;
    console.log("Unit F toggle");
  }
  if(Boolean(toggle)){
    let tempC=document.getElementById("temp").innerHTML;
    let tempF=((9*tempC)/5)+32;
    document.getElementById("temp").innerHTML=tempF.toFixed(0);
    document.getElementById("units").innerHTML="°F";
    toggle=0;
    console.log("ran C to F conversion");
  }
  else{
    let tempF=document.getElementById("temp").innerHTML;
    let tempC=((tempF-32)*5/9);
    document.getElementById("temp").innerHTML=tempC.toFixed(0);
    document.getElementById("units").innerHTML="℃";
    toggle=1;
    console.log("ran F to C conversion");
  }
}
