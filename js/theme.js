const themeButton=document.getElementById("themeToggle");

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark-mode");

themeButton.innerHTML="☀️";

}

themeButton.onclick=function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

themeButton.innerHTML="☀️";

}else{

localStorage.setItem("theme","light");

themeButton.innerHTML="🌙";

}

}