var Dictaphone = function() {

  if (__hasGetUserMedia()) {
    // Good to go!
    // document.getElementById('splash').innerHTML = "Reading to record";
    // document.getElementById('app').hidden = false;
    console.log("good!");
  } else {
    // Please get a real browser !
    // document.getElementById('splash').innerHTML = "Your browser does not support getUserMedia. Please get a real one !!";
    console.log("bad!");
  }

  function __hasGetUserMedia() {
    // Note: Opera is unprefixed.
    return !!(navigator.getUserMedia ||
              navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia ||
              navigator.msGetUserMedia);
  }

  function __getMediaSuccess() {}

  function __getMediaFail() {}

  function start() {
    navigator.getMedia(
                       {audio: true},
                       __getMediaSuccess,
                       __getMediaFail
                       );
  }

  return {
    start: start
  };

}();