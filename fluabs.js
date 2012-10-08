(function( $ ) {

  var methods = {
    init : function( options ) { 
      return this.each(function() {

        var s   = $.extend({}, $.fn.fluabs.defaults, options);
        var el  = $(this);
        var sel = $('li a', el);

        $(s.content+' div').hide();

        for ( var i=0; i < sel.length; i++ ){
          if ( sel[i].className == s.current) {
            var openTab = $(sel[i]).attr('href');
            $(s.content + ' div[data-tab='+openTab+']').show();
          }
        }

        el.on('click.fluabs', s.tabs, function(e) {
          e.preventDefault();

          var id      = $(this).attr('href');
          var tClass  = $(this).hasClass(s.current);

          sel.removeClass(s.current);
          $(this).addClass(s.current);      
          $(s.content + ' div:not([data-tab='+id+'])').hide();
          $('div[data-tab='+id+']').fadeIn();

        })

      })
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
      $.error( 'Method ' +  method + ' does not exist on jQuery.multiselect' );
    }    
  
  }

  //default settings
  $.fn.fluabs.defaults = {
    tabs        : 'li a',
    current     : 'current',
    content     : '.tabcontent'
  }

})(jQuery);