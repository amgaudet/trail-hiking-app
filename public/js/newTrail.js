const trailInput = document.getElementById('trail-input').value.trim();
const locationInput = document.getElementById('location-input');
const distanceInput = document.getElementById('distance-input');
const featureInput = document.getElementById('features-input');
const difficultyInput = document.getElementById('difficulty-input');
const newTrailSubmit = document.getElementById('new-trail-form');



newTrailSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const request = new XMLHttpRequest(); 
    request.open("post", "login.php");
    request.onload = function () {
        console.log(request.responseText);
    }
    request.send(new FormData(newTrailSubmit));
});


