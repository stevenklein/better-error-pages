$(function() {
	var centerContent = function() {
		var $contentContainer = $('.content-container')
			,	marginTop = ($(window).innerHeight() - $contentContainer.height()) / 2;
		$('.content-container').css('margin-top', marginTop);
	}

	centerContent();
	$(window).on('resize', centerContent);
});


$(function() {
	setTimeout(function() {
		$('.content-container').addClass('in');
	}, 500);
});