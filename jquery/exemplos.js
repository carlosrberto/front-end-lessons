$(function() {
	// exemplo 1
	$('#ex-1 button').on('click', function() {
		// var text = $('#ex-1 p:first-child').text();
		// var text = $('#ex-1 p').first().text();
		// var text = $('#ex-1 p').eq(0).text();
		// var text = $('#ex-1 p:eq(0)').text();
		var text = $(this).parent().prev().text();
		alert(text)
	});

	// exemplo 2 - faq

	$('#faq div').hide();
	$('#faq h3').on('click', function(){
		var div = $(this).next();
		$('#faq div').not(div).slideUp();
		div.slideToggle();
	});
});