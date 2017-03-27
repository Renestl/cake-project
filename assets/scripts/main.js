$(document).ready(function() {

var linkId;

	// load header, footer and other common elements
	$(function() {
		$("#header").load("common/header.html")
		// , function() {

			// TODO
			// Having issue of changing link colors after header load. Can select elements but only from inside the load function. 
			// on click, the page reloads, but everything inside of the load function is done before the page reload, meaning it's lost.

			// $("a").click(function() {

			// 	linkId = $(this).attr('id');
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




});

