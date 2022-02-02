$('input').keydown(function(e){

    // if the space bar is clicked, move input text to the left
    if (e.keyCode == 32) {

        // prepend text to the first child position which mimics trailing sentence
        $('#log').prepend('<p>' + $('input').val() + '</p>');

        // reset input value
        $('input').val('');

        floatAway();

    }

})

function floatAway() {
   anime({
    targets: 'p',
    translateX: function(){return anime.random(-300, -200);},
    rotate:-180,
    opacity:function(){return anime.random(.5, 1);},
    translateY: function(){return anime.random(60, 50);},
    scale:0,
    skew: function () {return anime.random(9, 10);},
    easing: "easeInOutSine",
    complete: function(anim) {
        if(anim.completed){$('p').remove()};
      }
  });
}
