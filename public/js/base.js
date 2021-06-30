const trailInput = document.getElementById('trail-input').value.trim();
const locationInput = document.getElementById('location-input');
const distanceInput = document.getElementById('distance-input');
const featureInput = document.getElementById('features-input');
const difficultyInput = document.getElementById('difficulty-input');
const newTrailSubmit = document.getElementById('new-trail-form');

// mobile menu burger
var burgerIconEl = document.querySelector("#burger");
var navbarMenuEl = document.querySelector("#nav-links");

burgerIconEl.addEventListener("click", () => {
  navbarMenuEl.classList.toggle("is-active");
});

// new form event listener
newTrailSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const request = new XMLHttpRequest(); 
    request.open("post", "login.php");
    request.onload = function () {
        console.log(request.responseText);
    }
    request.send(new FormData(newTrailSubmit));
});


