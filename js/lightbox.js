$(document).ready(function(){
	console.log('lightbox ready');


	$('#contact-link').click(function(e){
		e.preventDefault();

			$('#lightbox').css('display', 'block');
		});


		$('#lightbox').on('click', function(){
			$('#lightbox').css('display', 'none');
		});
});