$(document).ready(function(){
	console.log('lightbox ready');

	// $('#lightbox').hide();


	$('#contact-link').click(function(e){
		e.preventDefault();

			
			// $('#lightbox').show();
			$('#lightbox').css('display', 'block');
		});


		$('#lightbox').on('click', function(){
			$('#lightbox').css('display', 'none');
		});
});