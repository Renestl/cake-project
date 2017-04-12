$(document).ready(function() {

	// LOAD COMMON HEADER
	$("#header").load("common/header.html", finishLoad);
	// LOAD COMMON FOOTER
	$("#footer").load("common/footer.html");
	// LOAD COMMON INTEREST DIV
	$("#interest").load("common/interest.html");

	// HIGHLIGHT CURRENT ROUTE IN NAVIGATION
	var currentPath = window.location.pathname;

	function finishLoad() {
		var insideContent = $(".navigation").html();
		if (currentPath == '/custom.html') {
			var test = $('#custom');
			$(test).addClass('navActive');
		} else if (currentPath == '/menu.html') {
			var test = $('#menu');
			$(test).addClass('navActive');
		} else if (currentPath == '/about.html') {
			var test = $('#about');
			$(test).addClass('navActive');
		} else if (currentPath == '/hours.html') {
			var test = $('#hours');
			$(test).addClass('navActive');
		} 
	}	
	

	// SHRINK & FIX NAV BAR ON SCROLL
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 147) {
			$('#header').addClass('scrollUp');
		} else {
			$('#header').removeClass('scrollUp');
		}
	});


	// TOGGLE MENU TABS
	$('#other').on('click', function() {
		$('.menu-cakes').fadeOut(500, function() {
			$('.menu-other').fadeIn(500);
		});

		$('#cakes').removeClass('option-active')
					.addClass('option-nonactive');

		$('#other').removeClass('option-nonactive')
					.addClass('option-active');
		
	});

	$('#cakes').on('click', function() {
		$('.menu-other').fadeOut(500, function() {
			$('.menu-cakes').fadeIn(500);
		});

		$('#other').removeClass('option-active')
					.addClass('option-nonactive');

		$('#cakes').removeClass('option-nonactive')
					.addClass('option-active');
	});


	// ON CUSTOM FORM SUBMISSION
	if(document.getElementById("idea-form") != null) {
		document.getElementById("idea-form").onsubmit = function submitCustom() {
			let name = document.forms["idea-form"]["user_name"].value;
			let phone = document.forms["idea-form"]["user_phone"].value;

			// validate name and phone are not empty
			if (name === "" || phone === "") {
				alert("Please enter all required information.");
			} else {
				alert(`Thanks for your order ${name}! We will get back to you shortly.`);
				document.getElementById('idea-form').reset();
			}
		}
	}



	// $.ajax({
	// 	url: 'inventory.json',
	// 	dataType: 'json',
	// 	success: function(response) {
	// 		console.log(response);
	// 	}
	// });


});

