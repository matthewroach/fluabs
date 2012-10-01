(function( $ ) {

  $.fn.fluabs = function(el) {

    return this.each(function(i, el) {

      var el  = $(el);
      var eId = el.attr('href');

      if ( el.hasClass('current') != true ) {
        $('div[data-tab='+eId+']').hide();
      }

      el.on('click', function(e) {
        e.preventDefault()

        var id      = $(this).attr('href');
        var tClass  = $(this).hasClass('current');

        $('.tabs a').removeClass('current');
        $('.tabcontent div:not([data-tab='+id+'])').hide();
        $('div[data-tab='+id+']').fadeIn();
        $(this).addClass('current');

      });

    });

  }

})(jQuery);