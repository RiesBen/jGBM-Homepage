/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

	// jGBM jquery
	$("document").ready(function(){
		
		/* icons for dropdown*/
		$('header ul.menu ul li a').prepend('<i class="fa fa-map-marker"></i>');
		
		/* position of dropdown */
		function positionDropdown(){
			// dropdown menu position, we only have one? I guess so.
			// only on start page
			stadtgruppenul = $('body.node-type-startseite #block-system-main-menu ul.menu li ul')
			w = stadtgruppenul.width()
			breite = $(window).width();	
			if(breite > 800){		
				wpx = -w  + 50 + "px"
				stadtgruppenul.css('margin-left', wpx)
			}else{
				stadtgruppenul.css('margin-left', "0px")
			}
		}
		positionDropdown();
		

		/* end position of dropdown */
		
		
		
		/* mobile menu touch */
		function showMenu(){
			breite = $(window).width();
			if(breite > 800){
				$('header #block-system-main-menu').show();
				$('header #block-menu-block-1').show();
			}
		}
		mobileMenu = $('#mobile-menu');
		mobileMenu.click(function(){
			$('header #block-system-main-menu').toggle();
			$('header #block-menu-block-1').toggle();
		});
		/* end mobile menu touch */
		
		/* mobile login button */
		$('#block-user-login').prepend('<div id="show-form">Anmelden</div>');
		$('#show-form').bind('click', function(){
			$('#block-user-login form').toggle();
		});
		
		$(window).resize(function() {
			positionDropdown();
			showMenu();
		});
		
		// fix menu bar on scroll
		var nav = $('header#header');
		$(window).scroll(function () {
			// only fix menu for monitors, not mobile
			breite = $(window).width();
		    if ($(this).scrollTop() > 1 & breite > 800) {
		        nav.addClass("f-nav");
		    } else {
		        nav.removeClass("f-nav");
		    }
		});
		
		
	});
  }
};


})(jQuery, Drupal, this, this.document);


