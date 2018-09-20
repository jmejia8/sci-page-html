function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("content-banner");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }


  slides[slideIndex-1].style.display = "table";  
}

function initSlides(){
  showSlides(slideIndex);
  
  setInterval(function() {
    slideIndex += 1
    showSlides(slideIndex);
  }, 3000)
}

function displayMenu() {
  var menu = document.getElementById('menu');

  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  }else{
    menu.style.display = 'block'
  }
}
