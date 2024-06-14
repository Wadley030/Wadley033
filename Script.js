document.addEventListener("DOMContentLoaded", function() {
    // Fonksyon pou anile foto yo avèk efè fade-in
    function fadeInImage(imageId) {
        var image = document.getElementById(imageId);
        image.style.opacity = '0';
        var opacity = 0;
        var timer = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            image.style.opacity = opacity;
            opacity += 0.05;
        }, 50);
    }

    // Anile chak imaj lè paj la chaje
    fadeInImage('image1');
    fadeInImage('image2');
});
