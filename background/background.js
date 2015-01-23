$(function() {
	var centerContent = function() {
		var $contentContainer = $('.content-container')
			,	marginTop = ($(window).innerHeight() - $contentContainer.outerHeight(true)) / 2;
		$('.content-container').css('margin-top', marginTop);
	}

	centerContent();
	$(window).on('resize', centerContent);
});