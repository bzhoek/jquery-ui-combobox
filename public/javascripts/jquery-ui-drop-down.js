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
			
			options.selectedValue = options.selectedValue || $(self.element).val();
			options.originalValue = options.selectedValue
			
			self.valueIndex = options.values.indexOf(options.selectedValue);
			
			var position = $(self.element).position();
			self.list = $( "<ul>" )
				.addClass('ui-menu ui-widget ui-widget-content ui-corner-all')
				.css('width', $(self.element).outerWidth())
				.css('position', 'absolute')
				.css('top', position.x)
				.insertAfter(self.element);
			self.list.addClass('jq_drop_down').hide();

			$(options.values).each(function(i,value) {
				var item = $('<li>');
				var anchor = $('<a>').addClass('ui-corner-all').text(value);
				item.addClass('ui-menu-item')
						.append(anchor)
						.appendTo(self.list);
				item.on('mouseover', function(e) {
					anchor.addClass('ui-state-hover')
				});
				item.on('mousemove', function(e) {
					anchor.addClass('ui-state-hover')
				});
				item.on('mouseout', function(e) {
					anchor.removeClass('ui-state-hover');
				});
				anchor.on('mousedown', function() {
					var index = options.values.indexOf($(this).text());
					self._setValueFromIndex(index);
					setTimeout(function() {self.element.focus(); self.list.hide()}, 100);
				});
			});
			
			$(self.element).on('click', function() {
				self.list.show();
			});
			$(self.element).on('focus', function() {
				self.list.show();
			});
			$(self.element).on('blur', function() {
				self.list.hide();
			});
			
			$(self.element).on('keydown', $.proxy(this._inputKeyDown, this));
			$(self.element).on('keypress', $.proxy(this._inputKeyPress, this));
		},

		_setOption: function(key, value) {
			console.log("clear");
			switch (key) {
			case "clear":
			    break;
			case "values":
				this.options.values = value;
				break;
			}

			$.Widget.prototype._setOption.apply(this, arguments);
		},

		_inputKeyPress: function(e) {
			var chr = String.fromCharCode(e.charCode);
			var control = e.altKey || e.metaKey || e.ctrlKey;
			if(!control && chr.length > 0) {
				e.preventDefault();
			}
		},
		
		_inputKeyDown: function(e) {
			var self = this;
			var keyCode = $.ui.keyCode;
			var values = this.options.values;
			
			switch(e.which) {
        case keyCode.ENTER:
					self.list.hide();
        	break;
        case keyCode.ESCAPE:
          $(self.element).val(self.options.originalValue);
          self.valueIndex = self.options.values.indexOf(self.options.originalValue);
					self.list.hide();
          break;
				case keyCode.UP:
					if( !self.list.is(':visible')) {
						self.list.show();
					} else if(self.valueIndex > -1) {
            self._setValueFromIndex(self.valueIndex-1);
          }
					break;
				case keyCode.DOWN:
					if( !self.list.is(':visible')) {
						self.list.show();
					} else if(self.valueIndex < values.length-1) {
            self._setValueFromIndex(self.valueIndex+1);
					}
					break;
			}
		},

    _setValueFromIndex: function(i) {
			var self = this;
			var items = $(self.list).find('li');
      this.valueIndex = i;
      $(this.element).val(i == -1 ? "" : this.options.values[i]);

			self.list.find('a').removeClass('ui-state-hover');
			items.removeClass('ui-state-focus');
			if(i != -1) {
				$(items.get(i)).addClass('ui-state-focus')
			}
    },
		
		// Use the destroy method to clean up any modifications your widget has made to the DOM
		destroy: function() {
			$.Widget.prototype.destroy.call(this);
		}
	});
} (jQuery));
