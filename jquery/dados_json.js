[
	{
		'nome' : 'Carlos',
		'cidade' : 'Ribeirão'
	},

	{
		'nome' : 'Tamiris',
		'cidade' : 'Brodowski'
	},
]

$.ajax({
	type: 'json',
	url : '/dados/',
	success: function(data) {
		$('dados usuario:eq(0) nome').text()
	}
})