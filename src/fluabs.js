(function( $ ) {

  var methods = {
    init : function( options ) {
      return this.each(function() {

        var s   = $.extend({}, $.fn.fluabs.defaults, options)
          , el  = $(this)
          , sEl = el.find(s.tabs);

        $(s.content + ' div').hide();

        for ( var i=0; i < sEl.length; i++ ) {

          if ( sEl[i].className === s.current ) {

            var openTab = $(sEl[i]).attr('href');
            $(s.content + ' div[data-tab='+openTab+']').show();

          }

        }

        el.on('click.fluabs', s.tabs, function(e) {
          e.preventDefault();

          var el      = $(this)
            , id      = el.prop('hash');

          sEl.removeClass(s.current);
          el.addClass(s.current);

          $(s.content + ' div:not([data-tab='+id+'])').hide();
          $(s.content + ' div[data-tab='+id+']').fadeIn();

        });

      });
    },
    destroy : function( ) {

      $(this).off('.fluabs');

    }
  }

  $.fn.fluabs = function( method ) {

    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.fluabs' );
    }

  }

  //default settings
  $.fn.fluabs.defaults = {
    tabs        : 'li a',
    current     : 'current',
    content     : '.tabcontent'
  }

})(jQuery);
