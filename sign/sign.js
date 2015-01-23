$(function() {
	var centerContent = function() {
		var $contentContainer = $('.sign-container')
			,	marginTop = ($(window).innerHeight() - $contentContainer.outerHeight(true)) / 2;
		$('.sign-container').css('margin-top', (marginTop-50));
	}

	centerContent();
	$(window).on('resize', centerContent);
});