document.addEventListener('mousemove', function(e) {
    var flashlight = document.querySelector('.flashlight');
    flashlight.style.left = `${e.clientX}px`;  // Use clientX for relative to viewport
    flashlight.style.top = `${e.clientY}px`;   // Use clientY for relative to viewport
});
