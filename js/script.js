$(document).ready(function(){
	console.log('scripts working');

    // BACK TO TOP => (http://jsfiddle.net/gilbitron/Lt2wH/)
	if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
	}

  $('#about-link').click(function(){
    $('#about').scrollintoview();
  });

	$('#services-link').click(function(){
		$('#services').scrollintoview();
	});

  $('#team-link').click(function(){
    $('#team').scrollintoview();
  });
})