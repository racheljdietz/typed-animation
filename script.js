$('input').keydown(function (e) {

    // if the space bar is clicked, move input text to the left
    if (e.keyCode == 32) {

        // prepend text to the first child position which mimics trailing sentence
        $('#log').prepend('<p>' + $('input').val() + '</p>');

        // reset input value
        $('input').val('');

    }

})


var checkPTags = setInterval(function () {
    if ($("p").length > 0) { // Check if <p> element has been found
        floatAway();
    }
}, 2000); // check for <p> elements every 2 seconds


// animation function to float text away 
function floatAway() {

    anime({
        targets: 'p',
        translateX: function () { return anime.random(-300, -200); },
        rotate: -180,
        opacity: function () { return .5; },
        translateY: function () { return anime.random(60, 50); },
        scale: 0,
        skew: function () { return anime.random(9, 10); },
        delay: anime.stagger(300, { direction: 'reverse' }),
        easing: "easeInOutSine",
        complete: function (anim) {
            if (anim.completed) { $('p[style*="opacity: 0.5"]').remove() };
        }
    });
}

$("#rage").click(function () {
    $("#flames").show();

    $("#peaceful").removeClass('active');
    $("#rage").addClass('active');
});

$("#peaceful").click(function () {
    $("#flames").hide();

    $("#rage").removeClass('active');
    $("#peaceful").addClass('active');
});
