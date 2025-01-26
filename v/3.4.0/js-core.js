/* s5 js */

/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.9.1
*/
!function(o){"object"==typeof module&&"object"==typeof module.exports?o(require("jquery"),window,document):o(jQuery,window,document)}(function(o,t,i,e){var s=[],l=function(){return s.length?s[s.length-1]:null},n=function(){var o,t=!1;for(o=s.length-1;o>=0;o--)s[o].$blocker&&(s[o].$blocker.toggleClass("current",!t).toggleClass("behind",t),t=!0)};o.modal=function(t,i){var e,n;if(this.$body=o("body"),this.options=o.extend({},o.modal.defaults,i),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),this.$blocker=null,this.options.closeExisting)for(;o.modal.isActive();)o.modal.close();if(s.push(this),t.is("a"))if(n=t.attr("href"),this.anchor=t,/^#/.test(n)){if(this.$elm=o(n),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=o("<div>"),this.$body.append(this.$elm),e=function(o,t){t.elm.remove()},this.showSpinner(),t.trigger(o.modal.AJAX_SEND),o.get(n).done(function(i){if(o.modal.isActive()){t.trigger(o.modal.AJAX_SUCCESS);var s=l();s.$elm.empty().append(i).on(o.modal.CLOSE,e),s.hideSpinner(),s.open(),t.trigger(o.modal.AJAX_COMPLETE)}}).fail(function(){t.trigger(o.modal.AJAX_FAIL);var i=l();i.hideSpinner(),s.pop(),t.trigger(o.modal.AJAX_COMPLETE)});else this.$elm=t,this.anchor=t,this.$body.append(this.$elm),this.open()},o.modal.prototype={constructor:o.modal,open:function(){var t=this;this.block(),this.anchor.blur(),this.options.doFade?setTimeout(function(){t.show()},this.options.fadeDuration*this.options.fadeDelay):this.show(),o(i).off("keydown.modal").on("keydown.modal",function(o){var t=l();27===o.which&&t.options.escapeClose&&t.close()}),this.options.clickClose&&this.$blocker.click(function(t){t.target===this&&o.modal.close()})},close:function(){s.pop(),this.unblock(),this.hide(),o.modal.isActive()||o(i).off("keydown.modal")},block:function(){this.$elm.trigger(o.modal.BEFORE_BLOCK,[this._ctx()]),this.$body.css("overflow","hidden"),this.$blocker=o('<div class="'+this.options.blockerClass+' blocker current"></div>').appendTo(this.$body),n(),this.options.doFade&&this.$blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(o.modal.BLOCK,[this._ctx()])},unblock:function(t){!t&&this.options.doFade?this.$blocker.fadeOut(this.options.fadeDuration,this.unblock.bind(this,!0)):(this.$blocker.children().appendTo(this.$body),this.$blocker.remove(),this.$blocker=null,n(),o.modal.isActive()||this.$body.css("overflow",""))},show:function(){this.$elm.trigger(o.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=o('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker),this.options.doFade?this.$elm.css({opacity:0,display:"inline-block"}).animate({opacity:1},this.options.fadeDuration):this.$elm.css("display","inline-block"),this.$elm.trigger(o.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(o.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove();var t=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}):this.$elm.hide(0,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}),this.$elm.trigger(o.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||o('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,$elm:this.$elm,$blocker:this.$blocker,options:this.options}}},o.modal.close=function(t){if(o.modal.isActive()){t&&t.preventDefault();var i=l();return i.close(),i.$elm}},o.modal.isActive=function(){return s.length>0},o.modal.getCurrent=l,o.modal.defaults={closeExisting:!0,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",blockerClass:"jquery-modal",spinnerHtml:'<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},o.modal.BEFORE_BLOCK="modal:before-block",o.modal.BLOCK="modal:block",o.modal.BEFORE_OPEN="modal:before-open",o.modal.OPEN="modal:open",o.modal.BEFORE_CLOSE="modal:before-close",o.modal.CLOSE="modal:close",o.modal.AFTER_CLOSE="modal:after-close",o.modal.AJAX_SEND="modal:ajax:send",o.modal.AJAX_SUCCESS="modal:ajax:success",o.modal.AJAX_FAIL="modal:ajax:fail",o.modal.AJAX_COMPLETE="modal:ajax:complete",o.fn.modal=function(t){return 1===this.length&&new o.modal(this,t),this},o(i).on("click.modal",'a[rel~="modal:close"]',o.modal.close),o(i).on("click.modal",'a[rel~="modal:open"]',function(t){t.preventDefault(),o(this).modal()})});

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
var modalGallery = document.getElementById("modalGallery");

if(modalGallery) {
    
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
