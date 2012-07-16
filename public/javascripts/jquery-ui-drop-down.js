(function($) {
	$.widget("demo.dropdown", {

		options: {
		    clear: null,
				selectedValue: null,
				values: []
		},

		widget: function() {
			return this.list;
		},
		
		selectedIndex: function() {
			return this.valueIndex;
		},
		
		_create: function() {
			var self = this;
			var options = self.options;
			
			options.selectedValue = options.selectedValue ? options.selectedValue : $(self.element).val();
			self.valueIndex = options.values.indexOf(options.selectedValue);
			
			self.list = $( "<ul>" ).insertAfter(self.element);
			self.list.addClass('jq_drop_down').hide();

			$(options.values).each(function(i,value) {
				$('<li>').text(value).appendTo(self.list);
			});
			
			$(self.element).on('focus', function() {
				$(self.list).show();
			});
			$(self.element).on('blur', function() {
				$(self.list).hide();
			});
			
			$(self.element).on('keydown', $.proxy(this._keyDown, this));
		},

		_setOption: function(key, value) {
			switch (key) {
			case "clear":
					console.log("clear");
			    break;
			case "values":
				console.log("values");
				this.options.values = value;
				break;
			}

			$.Widget.prototype._setOption.apply(this, arguments);
		},
		
		_keyDown: function(e) {
			// console.log(this.options.values);
			// console.log(this.list);
			// console.log(this.element);
		},

		// Use the destroy method to clean up any modifications your widget has made to the DOM
		destroy: function() {
			$.Widget.prototype.destroy.call(this);
		}
	});
} (jQuery));
