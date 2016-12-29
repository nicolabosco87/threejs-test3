/**
 * Main Application File
 *
 * Use for bootstrapping large application
 * or just fill it with JS on small projects
 *
 */




window.addEventListener('load', init, false);

function init() {

  // init parallax
  initParallax();

  // set up the scene, the camera and the renderer
  createScene();

  // add the lights
  createLights();

  // add the objects
  //createPlane();
  createSea();
  //createSky();

  //add the listener
  document.addEventListener('mousemove', handleMouseMove, false);

  // start a loop that will update the objects' positions
  // and render the scene on each frame
  loop();

  // init video trasparency
  initVideo();
}


var mousePos={x:0, y:0};

// now handle the mousemove event

function handleMouseMove(event) {

  // here we are converting the mouse position value received
  // to a normalized value varying between -1 and 1;
  // this is the formula for the horizontal axis:

  var tx = -1 + (event.clientX / WIDTH)*2;

  // for the vertical axis, we need to inverse the formula
  // because the 2D y-axis goes the opposite direction of the 3D y-axis

  var ty = 1 - (event.clientY / HEIGHT)*2;
  mousePos = {x:tx, y:ty};

}



// handling video trasparency
//ctx.globalCompositeOperation = "copy";

function initVideo() {
  var outputCanvas = document.getElementById('output'),
    output = outputCanvas.getContext('2d'),
    outputBuffer = outputCanvas.getContext('2d'),
    bufferCanvas = document.getElementById('buffer'),
    buffer = bufferCanvas.getContext('2d'),
    imageToPrint = document.getElementById('imageToPrint'),
    video = document.getElementById('video'),
    width = outputCanvas.width,
    height = outputCanvas.height,interval;

  function processFrame() {
    buffer.drawImage(video, 0, 0);

    // this can be done without alphaData, except in Firefox which doesn't like it when image is bigger than the canvas
    var image = buffer.getImageData(0, 0, width, height),
      imageData = image.data,
      alphaData = buffer.getImageData(0, 0, width, height).data;

    outputBuffer.drawImage(imageToPrint, 0, 0);
    outputImage = outputBuffer.getImageData(0, 0, width, height);
    outputBufferData = outputImage.data;
    for (var i = 3, len = imageData.length; i < len; i = i + 4) {
      outputBufferData[i] = -(alphaData[i-1] - 255);
    }

    output.putImageData(outputImage, 0, 0, 0, 0, width, height);
  }

  interval = setInterval(processFrame, 40);
}

