/*!
 * Smartbug Media - Tech Challenge
 * Author - Scott Earl
 */

// Preloader
jQuery(window).load(function() {
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").fadeOut("slow");
})

// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});

// Parallax
$(document).ready(function(){
    if (!device.tablet() && !device.mobile()) {
        $(".parallax").addClass("fixed");
        $window = $(window);
        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);
            $(window).scroll(function() {
                var yPos = (($window.scrollTop() - $scroll.offset().top) / $scroll.data('speed'));
                var coords = '45% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });
            });
        });
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            $('#header').css({'opacity':(( 300-scroll )/400)+0.4});
        });

        /* Create HTML5 element for IE */
        document.createElement("section");
    }
});
