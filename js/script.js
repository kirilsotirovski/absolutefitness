$(window).scroll(function() {
    var top = $(window).scrollTop();
    if(top>=60)
    {
        $(".navbar-default").css("background-color", "#292c2f");
    }
    else if ($(".navbar-default").css("background-color", "#292c2f")) {
        $(".navbar-default").css("background-color", "transparent");
    }
});
    
    // ANIMATIONS
    new WOW().init();

    /* SMOOTH SCROLLING */
$('a').smoothScroll();

// ONE PAGE NAV
$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
	
});