$(function(){
	// DOM Ready
	$('.nav a').on('click', function(event){
		event.preventDefault();
		var url = $(this).attr('href');
		// $.get(url, function(content){
		// 	$('.content').empty().append(content);
		// });

		$('.content').load(url);
	});

	/*
	$.get('/contato.html', function(){

	});

	$.post('/contato.html', function(){
		
	});

	$.ajax({
		type: 'get',
		url: '/contato.html',
		success: function() {

		}
	});

	$.ajax({
		type: 'post',
		data: {
			'nome' : 'Carlos'
		}
		url: '/contato.html',
		success: function() {

		}
	});
	*/
});