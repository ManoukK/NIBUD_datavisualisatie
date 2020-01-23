$(window).on('scroll', function() {
    $(".container").each(function() {
      if (isScrolledIntoView($(this))) {
        $(this).find(".ul_tips").addClass("slide-in-left");
      }
    });
  });
  
  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }