$(document).ready(function() {

	// load header, footer and other common elements
	$(function() {
		$("#header").load("common/header.html");
		// , function() {

			// TODO
			// Having issue of changing link colors after header load. Can select elements but only from inside the load function. 
			// on click, the page reloads, but everything inside of the load function is done before the page reload, meaning it's lost.

			// $("a").click(function() {

				// $(this).attr('id').css('color', 'blue');
			// 	console.log(linkId);

			// 	setTimeout("$('a').css('color', 'blue')", 1500);

			// });

		$("#footer").load("common/footer.html");
		$("#interest").load("common/interest.html");
	});

	// function changeColor() {
	// 	$('#header a').removeClass('active');
	// 	$(linkId).addClass('active');
	// 	console.log(`work ${linkId}`);
	// }

	// function changeColor() {
	// 	$("a").click(function() {
	// 		let linkId = $(this).attr('id')
	// 		console.log(linkId);
			
	// 		if(linkId = 'menu') {
	// 			$('a').css('color', 'black');
	// 			$(linkId).css('color', 'blue');
	// 			console.log(linkId);
	// 		}
	// 	})
	// };
	

	// TOGGLE MENU TABS
	$('#other').on('click', function() {
		$('.menu-cakes').css('display', 'none');
		$('#cakes').removeClass('option-active');
		$('#cakes').addClass('option-nonactive');

		$('.menu-other').css('display', 'initial');
		$('#other').removeClass('option-nonactive');
		$('#other').addClass('option-active');
		
	});

	$('#cakes').on('click', function() {
		$('.menu-other').css('display', 'none');
		$('#other').removeClass('option-active');
		$('#other').addClass('option-nonactive');

		$('.menu-cakes').css('display', 'initial');
		$('#cakes').removeClass('option-nonactive');
		$('#cakes').addClass('option-active');
	});

});

