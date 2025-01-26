/* s5 js */
// # ScrollSpy (main nav)
$(window).bind('scroll', function() {
	var currentTop = $(window).scrollTop();
	var elems = $('.s5-section');
	elems.each(function(index){

		var elemTopOffset = $(".s5-nav").height();
		var elemTop 	= $(this).offset().top - elemTopOffset;
		var elemBottom 	= elemTop + $(this).height();
		if(currentTop >= elemTop && currentTop <= elemBottom){
			var id 		= $(this).attr('id');
			var navElem = $('a[href="#' + id+ '"]');
	navElem.parent().addClass('active').siblings().removeClass('active');
		}
	})
});

// # Clicks
$(document).ready(function() {
	// ## Nav click
	$(".s5-nav__menu ul li a").click(function(e) {
		// e.preventDefault();

		var target = $(this).attr("href"); // Get the target element's ID
		if ($(window).width() > 768) {
				var offset = 0;
			} else {
				var offset = 64; 
			}

		// Smoothly scroll to the target with offset
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset
		}, 100); // Adjust the duration as needed
	});

	// ## News click
	$(".s5-news ul li a.scroll-link").click(function(e) {
		// e.preventDefault();

		var target = $(this).attr("href"); // Get the target element's ID
		if ($(window).width() > 768) {
				var offset = 52;
			} else {
				var offset = 94; 
			}

		// Smoothly scroll to the target with offset
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset
		}, 100); // Adjust the duration as needed
	});

});
