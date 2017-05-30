$(document).ready(function(){
	console.log('working');

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



  // TOP ROW ANIMATION (.top-row changed to .head-row 5/19/17 -DM)

  var topRow = $('#top-row');
  var animLogo = $('.anim-logo');
  fadeIn = function(){
    animLogo.animate({top: 0}, 1500);
    topRow.animate({opacity: .8}, 1800);
  };
  fadeIn();
})