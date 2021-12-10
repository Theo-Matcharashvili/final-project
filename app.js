 //section 1 & 4  -  slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
// section 4 - slider 
  /*slideShow();
  function slideShow(){
    let i;
    var slide = document.querySelectorAll("slides");
    var dots = document.querySelectorAll("dot");
    for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slide.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(slideShow, 2000); // Change image every 2 seconds
  }
*/
  
   function dotsOnSlider() { 
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slide.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
  } 
//section 2 - bar chart
function move1() {
  const elem = document.getElementById("htmlProgress");   
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
         width++; 
        elem.style.width = width + '%'; 
    }
  }
} 
function move2() {
  const elem = document.getElementById("cssProgress");   
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width == 90) {
    clearInterval(id);
    } else {
    width++; 
    elem.style.width = width + '%'; 
    }
  }
} 
function move3() {
  const elem = document.getElementById("jsProgress");   
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
      if (width == 70) {
      clearInterval(id);
      } else {
      width++; 
      elem.style.width = width + '%'; 
      }
  }
} 
function move4() {
  const elem = document.getElementById("gitProgress");   
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
      if (width == 80) {
      clearInterval(id);
      } else {
      width++; 
      elem.style.width = width + '%'; 
      }
  }
} 
//section 4
//section5

/*function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
*/
function openContent(evt, contentName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//section 8
fetch('http://api.kesho.me/v1/user-test/contact')
.then(function(response){
  console.log(response);
  return response.json();
})
async function createUser(userData){
  try {
    const response = await fetch('http://api.kesho.me/v1/user-test/contact', {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {'Content-Type': 'application/json'}
    });
    await response.json();
    getUsers(); 
  }catch (e){
    console.log('Error - ', e);
  }
} 

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}
//Get the button that will prevent page from refreshing
const myBtn= document.getElementById("preventRefresh");

