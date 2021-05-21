var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
    var i;
    var slides = document.getElementsByClassName("project-info");
    var dots = document.getElementsByClassName("dot");
    slides[1].style.display = "none";  
    if (n > slides.length)
    {
        slideIndex = 1
    }    
    if (n < 1) 
    {
        slideIndex = slides.length
    }
    console.log(slideIndex)
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";      
    }
    slides[slideIndex-1].style.display = "flex";  
}