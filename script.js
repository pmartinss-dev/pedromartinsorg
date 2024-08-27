document.addEventListener('mousemove', function(e) {
    var flashlight = document.querySelector('.flashlight');
    flashlight.style.left = `${e.clientX}px`;  // Use clientX for relative to viewport
    flashlight.style.top = `${e.clientY}px`;   // Use clientY for relative to viewport
});

function copyToClipboard(text) {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); 
    document.execCommand("copy");

    document.body.removeChild(tempTextarea);


}
