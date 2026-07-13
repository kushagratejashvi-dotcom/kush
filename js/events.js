function showEvent(title,description){

document.getElementById("popup").style.display="flex";

document.getElementById("title").innerHTML=title;

document.getElementById("description").innerHTML=description;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}