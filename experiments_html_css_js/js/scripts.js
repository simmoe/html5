$("#button1").click(function() {
    $('html,body').animate({
        scrollTop: $("#cards2").offset().top},
        'slow');
});

$(".button2").click(function() {
    $('html,body').animate({
        scrollTop: $("#top").offset().top},
        'slow');
});