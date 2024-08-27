document.addEventListener('mousemove', function(e) {
    var flashlight = document.querySelector('.flashlight');
    flashlight.style.left = `${e.clientX}px`; 
    flashlight.style.top = `${e.clientY}px`;   
});

function copyToClipboard(text) {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextarea);


}
