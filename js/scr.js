/* global $ , alert, console*/

$(function () {

	'use strict';

	//trigger niceScroll 

	$('html').niceScroll({
		cursorcolor: '#f7600e',
		cursorwidth: 10,
		cursorborder: '1px solid #f7600e'
	});
	
	//change header height

	$('.header').height($(window).height());

	// Scroll to Features

	$('.header .arrow i').click(function () {

		$('html, body').animate({

			scrollTop: $('.featuret').offset().top

		}, 5000);

	});

	$('.hire').click(function () {

		$('html, body').animate({

			scrollTop: $('.our-team').offset().top

		}, 10000);

	});
	
// show Hidden Items for work

$('.show-more').click(function () {

	$('.our-work .hidden').fadeIn(5000);

});

//check testimoials

var leftkArrow = $('.testim .fa-chevron-left'),

	rightArrow = $('.testim .fa-chevron-right');

function checkClients() {

	$('.client:first').hasClass('active') ? leftkArrow.fadeOut() : leftkArrow.fadeIn();

	$('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

}

checkClients();

$('.testim i').click(function () {

	if ($(this).hasClass('fa-chevron-right')) {

$('.testim .active').fadeOut(2000, function () {

	$(this).removeClass('active').next('.client').addClass('active').fadeIn();

checkClients();

});

	} else {

		$('.testim .active').fadeOut(2000, function () {

			$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
		
		checkClients();
		});

	}

});

});