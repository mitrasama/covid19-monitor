var canvas = document.getElementById("signature");
var w = window.innerWidth;
var h = window.innerHeight;

// As the canvas doesn't has any size, we'll specify it with JS
// The width of the canvas will be the width of the device
canvas.width = w;
// The height of the canvas will be (almost) the third part of the screen height.
canvas.height = h/2.5;

var signaturePad = new SignaturePad(canvas,{
    dotSize: 1
});

document.getElementById("export").addEventListener("click",function(e){
    // Feel free to do whatever you want with the image
    // as export to a server or even save it on the device.
    var imageURI = signaturePad.toDataURL();    
    document.getElementById("preview").src = imageURI;
},false);

document.getElementById("reset").addEventListener("click",function(e){
    // Clears the canvas
    signaturePad.clear();
},false);