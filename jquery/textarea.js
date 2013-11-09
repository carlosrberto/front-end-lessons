$(function() {
	var textarea = $('#message');
	var textareaInitialHeight = textarea.height();
	var textareaHeight = textareaInitialHeight;
	var lineHeight = parseInt(textarea.css('line-height'));

	textarea.on('keydown', function(event){
		var isEnter = event.keyCode == 13 ? true:false;
		var isBackspace = event.keyCode == 8 ? true:false;
		var lines = textarea.val().match(/\n/g) || [];
		if (isEnter && lines.length > 4) {
			var newHeight = textareaHeight + lineHeight;
			textarea.height(newHeight);
			textareaHeight = newHeight;
		} else if ( isBackspace && lines.length > 4 ) {
			var newHeight = textareaHeight - lineHeight;
			textarea.height(newHeight);
			textareaHeight = newHeight;
		}
	});
});