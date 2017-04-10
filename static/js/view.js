$(document).ready(function () {
    var cw = $('.main-options-container').width();
    $('.main-options-container').css({'height':cw+'px'});
    window.onresize = function(event) {
        var cw = $('.main-options-container').width();
        $('.main-options-container').css({'height':cw+'px'});
    };
});

