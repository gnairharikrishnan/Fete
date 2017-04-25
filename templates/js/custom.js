var happyKiddoWindow = $(window);

// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    "use strict";

    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation($elem) {
    "use strict";

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}

var offset = 300,
//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
//duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
//grab the "back to top" link
    $back_to_top = $('.back-to-top');

$(document).ready(function () {
    "use strict";

    $(".toggleNav").on('click', function () {
        $(".header-hidden").toggleClass("active");
        $(".toggleNavButton").toggleClass("active");
    });

    $back_to_top.on('click', function (event) {
        "use strict";

        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
        );
    });
});

// Capture scroll events
happyKiddoWindow.on('scroll', function () {
    "use strict";

    var self = $(this);
    var header_elm = $('.header-transparent, .header-logo-centered, .header-regular, .header-hiddenmenu');

    if ($(this).scrollTop() >= 15) {
        header_elm.addClass("animated fadeInDown header-sticky");
    }
    else {
        header_elm.removeClass("animated fadeInDown header-sticky");
    }

    var bar_level = $('.bar .level');

    if (bar_level.length > 0) {
        checkAnimation(bar_level);
    }

    ( self.scrollTop() > offset ) ? $back_to_top.addClass('btt-visible') : $back_to_top.removeClass('btt-visible fade-btt');
    if (self.scrollTop() > offset_opacity) {
        $back_to_top.addClass('fade-btt');
    }
});


happyKiddoWindow.on('load', function(){
    var header_height = jQuery(".header").height();
        height = happyKiddoWindow.height() - header_height;

    if (parseInt(header_height) > 0) {
        happyKiddoWindow.slider = header_height;
    } else {
        header_height = window.slider;
    }

    jQuery('#bs-carousel').height(height);
});