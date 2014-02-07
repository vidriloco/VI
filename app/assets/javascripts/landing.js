//= require owl.carousel.min

$.extend({
	isDefined: function(dom) {
		return $(dom).length;
	},
	alignCompanies: function() {
		var companies = $('.companies .company').length;
		if((companies.length % 2) != 0) {
			$('.companies').append($($('.companies .company')[0]).clone());
		}
	}
});

$(document).ready(function() {
	if($.isDefined('#quotations-container')) {
		$('#quotations-container').owlCarousel({
			navigation : true,
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			navigation: false,
			pagination: false,
			autoPlay : false,
			autoHeight : false,
			afterAction: function(element) {
				var item = this.currentItem;
				$('#quotations-indicators .circle').removeClass('blue-circle');
				$('#quotations-indicators #circle-'+item+' .circle').addClass('blue-circle');
			}
		});
		
		var owlQ = $("#quotations-container").data('owlCarousel');

		var backgrounds = [];

		var images = $('#quotations-container .quotation');

		var circleBase;
		for(var i = 0; i < images.length ; i++) {
			// Clone circles
			circleBase = $('#quotations-indicators #circle').clone();
			circleBase.attr('id', 'circle-'+i);
			circleBase.insertBefore("#quotations-indicators #next-control");

			// Insert pics on background array list
			backgrounds.push({src: $(images[i]).attr('src') });
		}
		$('#quotations-indicators #circle').remove();
		$('#quotations-indicators #circle-0 .circle').addClass('blue-circle');


		$('#quotations-indicators .circle').click(function() {
			var slideIdx = $(this).parent().attr('id').split('-')[1];
			owlQ.goTo(slideIdx);
		});

		$('#quotations-indicators .next-icon').click(function() {
			owlQ.next();
		});

		$('#quotations-indicators .prev-icon').click(function() {
			owlQ.prev();
		});
	}

	if($.isDefined('#slides-container')) {
		$('#slides-container').owlCarousel({
			navigation : true,
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			navigation: false,
			pagination: false,
			autoPlay : true,
			autoHeight : false,
			afterAction: function(element) {
				var item = this.currentItem;
				$('#slides-indicators .circle').removeClass('blue-circle');
				$('#slides-indicators #circle-'+item+' .circle').addClass('blue-circle');
			}
		});

		var owl = $("#slides-container").data('owlCarousel');

		var backgrounds = [];

		var images = $('#slides-container img');

		var circleBase;
		for(var i = 0; i < images.length ; i++) {
			// Clone circles
			circleBase = $('#slides-indicators #circle').clone();
			circleBase.attr('id', 'circle-'+i);
			circleBase.insertBefore("#slides-indicators #next-control");

			// Insert pics on background array list
			backgrounds.push({src: $(images[i]).attr('src') });
		}
		$('#slides-indicators #circle').remove();
		$('#slides-indicators #circle-0 .circle').addClass('blue-circle');


		$('#slides-indicators .circle').click(function() {
			var slideIdx = $(this).parent().attr('id').split('-')[1];
			owl.goTo(slideIdx);
		});

		$('#slides-indicators .next-icon').click(function() {
			owl.next();
		});

		$('#slides-indicators .prev-icon').click(function() {
			owl.prev();
		});
	}
	
	if($.isDefined('.video')) {
		var url = $('.video .url').attr('data-url');
		$('.video .container').append(url);
		$('.video .url').remove();
	}
	
	if($.isDefined('#plain_image')) {
		$('#plain_image').css('background-image', 'url('+$('#plain_image img').attr('src')+')');
		$('#plain_image').css('background-repeat', 'no-repeat');
	}
	
	$('#infographic').css('background-image', 'url('+$('#infographic img').attr('src')+')');
	
	$('#open-call').css('background-image', 'url('+$('#open-call img').attr('src')+')');
	$('#open-call').css('background-repeat', 'no-repeat');
	
	if($.isDefined('#shadowbox')) {
		Shadowbox.init({
		    skipSetup: true
		});

		window.onload = function() {

		    Shadowbox.open({
		        content:    $('#shadowbox .content').html(),
		        player:     "html",
		        height:     230,
		        width:      450
		    });

		};
		$('#shadowbox').hide();
	}
	
	if($.isDefined('#contact')) {
		function initialize() {
			var myLatlng = new google.maps.LatLng($('#contact').attr('data-lat'), $('#contact').attr('data-lng'));


			var mapOptions = {
				center: myLatlng,
				zoom: 18,
				scrollwheel: false,
				disableDoubleClickZoom: true,
				streetViewControl: false
	    };

			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			var marker = new google.maps.Marker({
			    position: myLatlng,
			    map: map,
			    title:"Nuestra ubicación"
			});
			marker.setMap(map);
			google.maps.event.addDomListener(window, 'load', initialize);
			google.maps.event.addDomListener(window, "resize", function() {
			 var center = map.getCenter();
			 google.maps.event.trigger(map, "resize");
			 map.setCenter(center); 
			});
/*			google.maps.event.addListener(map, 'click', function() {
				if(marker==null) {
					

					
					$('#map').css('height', '200px');
				} else {
					marker.setMap(null);
					marker = null;
					$('#map').css('height', '100px');
					
				}
			});*/

	  }

		google.maps.event.addDomListener(window, 'load', initialize);
	}

	$(window).resize(function() {
		$('#slides-indicators').css({ top: $('.owl-item img').innerHeight()-50 });
		$('#quotations-indicators').css({ top: $('.owl-item img').innerHeight()-50 });
	});
	$(window).trigger('resize');
});