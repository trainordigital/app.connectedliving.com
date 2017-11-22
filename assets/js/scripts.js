/*
Author       : Ocean_Themes.
Template Name: Jaynob - Responsive App Landing Page
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow');
			
			var assistant1 = [
				"I booked your Mom at the salon for Tuesday at 2 pm.",
				"Aunt Lorry and Uncle Bill's transportation from the airport is scheduled.",
				"The plowing company will be there in an hour to clear your driveway.",
			];
			var assistant2 = [
				"Your groceries will be delivered this afternoon.",
				"The holiday decorator will be at your parents' house tomorrow to put up the lights.",
				"I found three hotels within your price range that can accommodate your travel plans this holiday season.",
			];
			var assistant3 = [
				"We're sending a car to your parents now to take them to their salsa class.",
				"I found three stores that carry the sweater you want to get your Dad in time for the holidays.",
				"We'll take care of your Mom's cookie tray deliveries so she doesn't have to battle the cold and snow.",
			];
			

var assistant1Quote = 0;
var assistant2Quote = 0;
var assistant3Quote = 0;

$("#quote-1").text('"' + assistant1[assistant1Quote] + '"');
$("#quote-2").text('"' + assistant2[assistant2Quote] + '"');
$("#quote-3").text('"' + assistant3[assistant3Quote] + '"');

	setInterval(function() {
		if(assistant1Quote !== 2) {
			assistant1Quote++;
		} else {
			assistant1Quote = 0;
		}

		if(assistant2Quote !== 2) {
			assistant2Quote++;
		} else {
			assistant2Quote = 0;
		}
		if(assistant3Quote !== 2) {
			assistant3Quote++;
		} else {
			assistant3Quote = 0;
		}
		$("#quote-1").fadeOut(1000, function() { $(this).text('"' + assistant1[assistant1Quote] + '"').fadeIn(1000); });
		$("#quote-2").fadeOut(1000, function() { $(this).text('"' + assistant2[assistant2Quote] + '"').fadeIn(1000); });
		$("#quote-3").fadeOut(1000, function() { $(this).text('"' + assistant3[assistant3Quote] + '"').fadeIn(1000); });
	}, 7000);

		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			/*$(document).on('click','.navbar-collapse.in',function(e) {
				$('.navbar-sub').css('height', 500);
				
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				
				$(this).collapse('hide');
			}
			});	*/
			
			$('.navbar-toggle').on('click', function() {
				$(".navbar-sub").toggleClass('expanded-header');
			});


			$('.serviceBox').on('click', function() {
				if($(document).width() < 760) {
					$('.advent').css('opacity', 0);
					$(this).find('.advent').css('opacity', 1);
				}
			});		/*END MENU JS*/ 
		
		/* START SCREENSHOTS SLIDER JS*/
		$('.how_work_slider').owlCarousel({ 
			items:1,
			itemsDesktop:[1000,2],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:false,
			navigation:true,
			navigationText:["",""],
			autoPlay:false
		});
		/* END SCREENSHOTS SLIDER JS*/

		/* START SCREENSHOTS SLIDER JS*/
		$('.s-slider').owlCarousel({ 
			items:4,
			itemsDesktop:[1000,2],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:false,
			navigation:true,
			navigationText:["",""],
			autoPlay:true
		});
		/* END  SCREENSHOTS SLIDER JS*/
		
		/* START TESTIMONIAL JS*/
		$("#testimonial-slider").owlCarousel({
			items:3,
			itemsDesktop:[1000,2],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:false,
			navigation:true,
			navigationText:["",""],
			autoPlay:false
		});
		/* END TESTIMONIAL JS*/
		
		/*START VIDEO JS*/
		 function autoPlayYouTubeModal() {
			var trigger = $("body").find('[data-toggle="modal"]');
			trigger.on("click",function() {
			  var theModal = $(this).data("target"),
				videoSRC = $('#video-modal iframe').attr('src'),
				videoSRCauto = videoSRC + "?autoplay=1";
			  $(theModal + ' iframe').attr('src', videoSRCauto);
			  $(theModal + ' button.close').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			  $('.modal').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			});
		  }
		  autoPlayYouTubeModal();
		/*END VIDEO JS*/	
		
		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/

	}); 		
	
	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */	
	
	/*START WOW ANIMATION JS*/
	  /*new WOW().init();	*/
	/*END WOW ANIMATION JS*/	
				
})(jQuery);