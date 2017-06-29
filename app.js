(function(){

	$(document).ready(function(){

//play videos
		$('.left a').on('click', function(){
			$('iframe').hide();
			$('.play .fa').show();
		});

		$('.a').on('click', function(){
			$('.play .fa').hide();
			$('iframe').hide();
			$('.number').fadeIn();
		});

		$('.b').on('click', function(){
			$('.play .fa').hide();
			$('iframe').hide();
			$('.asphyxiate').fadeIn();
		});

		$('.c').on('click', function(){
			$('.play .fa').hide();
			$('iframe').hide();
			$('.lemon').fadeIn();
		});

		$('.d').on('click', function(){
			$('.play .fa').hide();
			$('iframe').hide();
			$('.milkshake').fadeIn();
		});

		$('.e').on('click', function(){
			$('.play .fa').hide();
			$('iframe').hide();
			$('.bad').fadeIn();
		});

		$('.f').on('click', function(){
			$('.play .fa').hide();
			$('iframe').hide();
			$('.work').fadeIn();
		});

		$('.g').on('click', function(){
			$('.play .fa').hide();
			$('iframe').hide();
			$('.pop').fadeIn();
		});

		$('.play .fa').on('click', function(){
			$('.play .fa').hide();
			$('iframe').hide();
			$('.asphyxiate').fadeIn();
		});

//show Contact
	$('.contact-link').on('click', function(){
		$('.zero').show();
	});

	});
})();
