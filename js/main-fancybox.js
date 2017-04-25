jQuery(document).ready(function ($) {

    "use strict";
    /*
     |--------------------------------------------------------------------------
     | Global myTheme Obj / Variable Declaration
     |--------------------------------------------------------------------------
     |
     |
     |
     */

    var myTheme = window.myTheme || {},
        $win = $(window);


    /*
     |--------------------------------------------------------------------------
     | isotope
     |--------------------------------------------------------------------------
     |
     |
     |
     */

    myTheme.Isotope = function () {

        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });


    };


    /*
     |--------------------------------------------------------------------------
     | Fancybox
     |--------------------------------------------------------------------------
     |
     |
     |
     */

    myTheme.Fancybox = function () {

        $(".fancybox-pop").fancybox({
            maxWidth: 900,
            maxHeight: 700,
            fitToView: true,
            width: '80%',
            height: '80%',
            autoSize: false,
            closeClick: false,
            openEffect: 'elastic',
            closeEffect: 'none'
        });

    };


    /*
     |--------------------------------------------------------------------------
     | Functions Initializers
     |--------------------------------------------------------------------------
     |
     |
     |
     */

    myTheme.Isotope();
    myTheme.Fancybox();


});




