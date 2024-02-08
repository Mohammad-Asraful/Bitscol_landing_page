var host_url = document.location.hostname;
// console.log(host_url);
$(document).ready(function() {
    
    // Scroll to element
    $('.scrollTo').on('click', function (event) {
        $('.button-close a').click();
        if($(this).attr('href').split('#')[1]) {
            var $el = $(this).attr('href').match(/(#[a-z0-9][a-z0-9\-_]*)/ig)[0];
            if ($($el).offset()) {
                $('html, body').animate({
                    scrollTop: ($($el).offset().top - 50)
                },1900,'swing');
            }
        }
        event.preventDefault();
    });
    // Scroll to Top
    // declare variable
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 200) {
            $(scrollTop).css({"opacity":"1","z-index":"1",'bottom':'16px'});
        } else {
            $(scrollTop).css({"opacity":"0","z-index":"-1",'bottom':'-70px'});
        }
    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1900);
        return false;
    }); // click() scroll top EMD

});