var preloadImage = function(url, callback) {
	var img = new Image();
	img.src = url;

	$(img).on('load', function(){
		callback();
	});
}

$(function() {
	$('.image-list a').on('click', function(event){
		event.preventDefault();
		var url = $(this).attr('href');
		$('.large-image img').fadeTo(500, 0, function(){
			preloadImage(url, function(){
				$('.large-image img').attr('src', url);
				$('.large-image img').fadeTo(500, 1);
			});
		});
	});
});