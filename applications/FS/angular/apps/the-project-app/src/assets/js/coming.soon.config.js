(function($) {

	"use strict";

	$(document).ready(function() {

		$('.countdown').countdown('2019/10/10', function(event) {
		$(this).html(event.strftime('' +
			'<span class="countdown-section"><span class="countdown-amount">%D</span> <span class="countdown-period">days</span></span> ' +
			'<span class="countdown-section"><span class="countdown-amount">%H</span> <span class="countdown-period">hours</span></span> ' +
			'<span class="countdown-section"><span class="countdown-amount">%M</span> <span class="countdown-period">minutes</span></span> ' +
			'<span class="countdown-section"><span class="countdown-amount">%S</span> <span class="countdown-period">seconds</span></span>'));
		});

	}); // End document ready

})(jQuery);