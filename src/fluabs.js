(function( $ ) {



	var methods = {
		init: function( _options ) {
			return this.each(function() {

				var s = $.extend({}, $.fn.fluabs.defaults, _options);
				var $el = $(this);
				var sEl = $el.find(s.tabs);

				$(s.content + ' > div').hide();

				for ( var i=0; i<sEl.length; i++ ) {
					if ( sEl[i].className === s.current ) {
						var openTab = sEl[i].hash;
						$(s.content + ' > div[data-tab='+openTab+']').addClass(s.current).show();
					}
				}

				$el.on('click.fluabs', s.tabs, function(e) {
					e.preventDefault();
					var $el = $(this);
					var id = $el.prop('hash');

					$el.removeClass(s.current);
					$el.addClass(s.current);

					$(s.content + ' > div:not([data-tab='+id+'])').removeClass(s.current).hide();
					$(s.content + ' > div[data-tab='+id+']').fadeIn().addClass(s.current);

				});

			});
		},



		destroy: function( ) {
			$(this).off('.fluabs');
		}
	};



	$.fn.fluabs = function( _method ) {

		// Method calling logic
		if ( methods[_method] ) {
			return methods[_method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof _method === 'object' || ! _method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  _method + ' does not exist on jQuery.fluabs' );
		}

	}



	// default settings
	$.fn.fluabs.defaults = {
		tabs: 'li a',
		current: 'current',
		content: '.tabcontent'
	};



})(jQuery);
