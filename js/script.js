    new WOW().init();

    $(document).ready(function() {
        var screen = $(window).width();
        console.log(screen);
        if(screen <= 494) {
            $('#app_p').removeClass('col-xs-6').addClass('col-xs-12 text-center');
        }
        
    });