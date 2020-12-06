/*
 * Version: 2.1.2
 */

// Notify Plugin - Code for the demo site of HtmlCoder
// You can delete the code below
//-----------------------------------------------
(function ($) {

	"use strict";
	$('app-root').bind('angular-ready', function () {
	//$(document).ready(function () {
		if (($(".main-navigation.onclick").length > 0) && $(window).width() > 991) {
			$.notify({
				// options
				message: 'The Dropdowns of the Main Menu, are now open with click on Parent Items. Click "Home" to checkout this behavior.'
			}, {
				// settings
				type: 'info',
				delay: 10000,
				offset: {
					y: 150,
					x: 20
				}
			});
		};
		if (!($(".main-navigation.animated").length > 0) && $(window).width() > 991 && $(".main-navigation").length > 0) {
			$.notify({
				// options
				message: 'The animations of main menu are disabled.'
			}, {
				// settings
				type: 'info',
				delay: 10000,
				offset: {
					y: 150,
					x: 20
				}
			}); // End Notify Plugin - The above code (from line 14) is used for demonstration purposes only

		};
	}); // End document ready

})(jQuery);
