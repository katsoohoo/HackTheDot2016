

$(document).ready(function() {
      $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() { console.log('Ready'); }, // Callback for Modal open
      complete: function() { console.log('Closed'); } // Callback for Modal close
    }
  );

    $.ajax({
    method:'GET',
    url:'https://services.faa.gov/airport/status/SFO?format=application/json',
    success: function(data){

        console.log(data);

        var message = "";
        var randNum = 0;

        var noDelayMsg =
["Relax, your fucking flight is on time. Unless you're running late. Then fucking get to the airport ASAP.", "Karl the Fog doesn't have shit on us. NOT TODAY", "FUCK YEAH FLIGHT IS ON TIME WOO", "Karl ain't fuckin' delaying this airport!", "FUCK NO, Karl the Fog and friends ain't delaying shit.", "FUCK YEAH! As in, fuck yeah, there aren't any delays." ] ;

        var delayMsg = ["FUCK. Karl strikes again.", "God damnit, shit's delayed, yo.", "UGH, FUCK MY ASS there's delays.", "KARLLLLLL FUCKKKK YOUUUUU we're delayed.", "shit. Shit. SHIT FUCK DAMNIT WEATHER DELAYS FUCK", "Karl, stop being such a dick and leave SFO alone!", "Karl, go die in a fire (can fog die in a fire?)"];

        console.log(data.delay);
        if(data.delay == "true") {
            randNum = Math.floor(Math.random()*delayMsg.length);
            message = delayMsg[randNum]
        }
        else {
            randNum = Math.floor(Math.random()*noDelayMsg.length);
            message = noDelayMsg[randNum];
        }

        $("#airport-name").html(data.name);
        $("#delay-message").html(message);
        $("#weather").html(data.weather.weather);
        $("#temperature").html(data.weather.temp);
        $("#wind").html(data.weather.wind);
    }
    });

});
