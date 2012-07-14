(function($) {
	$.widget("demo.dropdown", {

		options: {
		    clear: null
		},

		_create: function() {
			var self = this;
			this.list = $( "<ul>" ).insertAfter( this.element );
			this.list.addClass('drop_down_bla');
			console.log('bla');
		},

		_setOption: function(key, value) {
			switch (key) {
			case "clear":
			    break;
			}

			$.Widget.prototype._setOption.apply(this, arguments);
		},

		// Use the destroy method to clean up any modifications your widget has made to the DOM
		destroy: function() {
			$.Widget.prototype.destroy.call(this);
		}
	});
} (jQuery));
