document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been submitted.");

this.reset();

});
let slideIndex = 0;
showSlides();

function showSlides(){

    let slides = document.getElementsByClassName("slides");

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slideIndex++;

    if(slideIndex>slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].style.display="block";

    setTimeout(showSlides,3000);

}