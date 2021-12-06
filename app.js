
      //section 1 -  slider
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
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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

// Get the modal
var modal = document.getElementById("myModal");

// Get the div that opens the modal
var btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//when the user clicks the button, page won't refresh
preventRefresh.onclick = function(){
event.preventDefault();
};

// When the user clicks  the div open the modal 
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