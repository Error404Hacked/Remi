var heart = document.getElementById('heart');
var surpriseButton = document.getElementById('surprise-button');
var surpriseMessage = document.getElementById('surprise-message');

surpriseButton.addEventListener('click', function() {
    surpriseMessage.style.display = 'block';
});


heart.addEventListener('animationend', function() {
    heart.classList.remove("beat");
});

setInterval(function() {
    heart.classList.add("beat");
}, 1000);