// $(window).on('load', function(){
// 	alert('carregado!');	
// });

// $(window).on('click', function(){
// 	alert('clique na janela!');	
// });

/*
var li_f = $('.nomes li').filter(function(){
	if ( $(this).attr('data-s') == 'f' ) {
		return this;
	}
});

var li_m = $('.nomes li').filter(function(){
	if ( $(this).attr('data-s') == 'm' ) {
		return this;
	}
});

li_f.css('color', 'red');
li_m.css('color', 'blue');

*/

$('.nomes li[data-s="f"]').css('color', 'red');
$('.nomes li[data-s="m"]').css('color', 'blue');
$('.nomes li[data-s="f"], .nomes li[data-s="m"]').css('backgroundColor', 'yellow');