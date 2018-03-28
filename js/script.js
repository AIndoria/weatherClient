function getLocation(){

}
getLocation();

var temp=document.getElementById("temp");

function loadAPI(){
    var request=new XMLHttpRequest();
    request.open("GET","xx");
    request.onload=function(){
        var data=JSON.parse(request.responseText);
        addTemp();
    }

}

loadAPI();