(function ($) {
  jQuery.support.cors = true;
  $(function () {
    $('.jcarousel').jcarousel({
      animation: 'slow',
      wrap: 'circular'
    })
      .jcarouselAutoscroll({
      interval: 2000,
      target: '+=1',
      autostart: true
    });
    $('.jcarousel-prev')
      .jcarouselControl({
      target: '-=1'
    });
    $('.jcarousel-next')
      .jcarouselControl({
      target: '+=1'
    });

  var firstLoad = true;

  function pixabaySearch() {
    var request = $('.ideas__discover-input').val();
    var demand = $.ajax({
      url: "https://pixabay.com/api/?username=kushneruk_1995&key=3614464-520c9209e664f683faff11ff5&q=" + request + "&image_type=photo",
      success: function(data) {

        function PixabayCallback(data) {
          $('.ideas-container').empty();

          $.each(data.hits, function(i,hits) {
            if ((i==1)||(i==2)) { 
               $(".ideas-container").prepend("<div class=' ideas__item ideas__item-double' style='background: url(" + hits.webformatURL + ") center no-repeat; background-size: cover;'><a href='" + hits.pageURL + "' class='ideas__item-link' target='_blank'><span class='ideas__item-word'>" + request + "</span></a></div>");
            } else {
               $(".ideas-container").prepend("<div class='ideas__item' style='background: url(" + hits.webformatURL + ") center no-repeat; background-size: cover;'><a href='" + hits.pageURL + "' class='ideas__item-link' target='_blank'><span class='ideas__item-word'>" + request + "</span></a></div>");
            if ( i == 6 ) return false;
            }
          });

          function initIsotope() {
            var elem = document.querySelector('.ideas-container');
            var isotopeInst = new Isotope( elem, {
              itemSelector: '.ideas__item',
              layoutMode: 'masonry',
              transitionDuration: '1.6s',
              masonry: {
                gutter: 20
              }
              });
          }

          initIsotope(); 
        }

        PixabayCallback(data);
      }
    });
  }

  
  if(firstLoad = true) {
      pixabaySearch();
    firstLoad = false;
  }
  $('.ideas__discover-button').click(function(e) {
    e.preventDefault();
    pixabaySearch();
  });
});

})(jQuery);
