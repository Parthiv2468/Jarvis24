$(document).ready(function () {

  // Main Text Animation
  $('.text').textillate({
    loop: true,
    sync: true,
    in: {
      effect: "bounceIn"
    },
    out: {
      effect: "bounceOut"
    }
  });

  // SiriWave Configuration
  var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 800,
    height: 200,
    style: "ios9",
    amplitude: 1,
    speed: 0.3,
    autostart: true
  });

  // Siri Message Animation
  $('.siri-message').textillate({
    loop: true,
    sync: true,
    in: {
      effect: "fadeInUp",
      sync: true
    },
    out: {
      effect: "fadeOutUp",
      sync: true
    }
  });

  // mic button click event

  $("#MicBtn").click(function () { 
    eel.playAssistantSound()
    $("#Oval").attr("hidden", true);
    $("#SiriWave").attr("hidden", false);
    eel.allCommands()()

  });

});
