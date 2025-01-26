/* s5 js */

import "jquery.1.11.1.module.js";

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


// # Toggle theme
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
	if (localStorageTheme !== null) {
		return localStorageTheme;
	}
	if (systemSettingDark.matches) {
		return "dark";
	}

	return "light";
}
function updateButton({ buttonEl, isDark }) {
	const newCta = isDark ? "☉" : "✶";
	const newTitle = isDark ? "Change to light theme" : "Change to dark theme";
	// use an aria-label if you are omitting text on the button
	// and using a sun/moon icon, for example
	buttonEl.setAttribute("aria-label", newCta);
	buttonEl.setAttribute("title", newTitle);
	buttonEl.innerText = newCta;
}

function updateThemeOnHtmlEl({ theme }) {
	document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", (event) => {
	const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

	localStorage.setItem("theme", newTheme);
	updateButton({ buttonEl: button, isDark: newTheme === "dark" });
	updateThemeOnHtmlEl({ theme: newTheme });

	currentThemeSetting = newTheme;
}); 


// # Gallery modal
$('#modalGallery').on($.modal.BEFORE_OPEN, function(event, modal) {
	$(".blocker").toggleClass("blocker--full");
});
$('#modalGallery').on($.modal.AFTER_CLOSE, function(event, modal) {
	$(".blocker").toggleClass("blocker--full");
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide-main");
	var dots = document.getElementsByClassName("slide-mini");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	dots[slideIndex-1].scrollIntoView({
		behavior: "smooth",
		block: "center",
		inline: "center"
	});
	captionText.innerHTML = dots[slideIndex-1].children[0].alt;
}

// # Show more
function toggleShowMore(button) {
	const content = button.previousElementSibling;
	const isExpanded = content.classList.contains('is-expanded');

	if (isExpanded) {
		content.classList.remove('is-expanded');
		button.textContent = 'Show more';
	} else {
		content.classList.add('is-expanded');
		button.textContent = 'Show less';
	}
}
