(function($) {
	var defaults = {
		duration: 500,
		containerClass: '.sf-container',
		buttonClass: '.sf-button',
		textClass: '.sf-text',
	}

	var Sanfona = function(el, options) {
		this.options = $.extend({}, defaults, options);
		this.el = el;
		this.el.find(this.options.textClass).hide();
		this.initEvents();
	}

	Sanfona.prototype = {
		initEvents: function() {
			this.el.find(this.options.buttonClass).on('click', $.proxy(this.toggle, this));
		},

		toggle: function(event) {
			var text = $(event.currentTarget).parents(this.options.containerClass).find(this.options.textClass);
			text.slideToggle(this.options.duration);
			this.el.find(this.options.textClass).not(text).slideUp(this.options.duration);
		}
	}

	$.fn.sanfona = function(options) {
		this.each(function(){
			$(this).data('sanfona', new Sanfona($(this), options))
		});
	}	
})(jQuery);

$(function(){
	$('.faq').sanfona({
		duration: 2000
	});

	$('.faq').sanfona('toggle');
});