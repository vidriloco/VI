//= require owl.carousel.min

$.extend({
	isDefined: function(dom) {
		return $(dom).length;
	}
});

$(document).ready(function() {
	
	$('#slides-container').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation: false,
		pagination: false,
		autoPlay : true,
		autoHeight : false,
		afterAction: function(element) {
			var item = this.currentItem;
			$('.circle').removeClass('blue-circle');
			$('#circle-'+item+' .circle').addClass('blue-circle');
		}
	});
	
	var owl = $("#slides-container").data('owlCarousel');
	
	var backgrounds = [];
	
	var images = $('#slides-container img');
	
	var circleBase;
	for(var i = 0; i < images.length ; i++) {
		// Clone circles
		circleBase = $('#circle').clone();
		circleBase.attr('id', 'circle-'+i);
		circleBase.insertBefore("#next-control");
		
		// Insert pics on background array list
		backgrounds.push({src: $(images[i]).attr('src') });
	}
	$('#circle').remove();
	$('#circle-0 .circle').addClass('blue-circle');
		
	
	$('.circle').click(function() {
		var slideIdx = $(this).parent().attr('id').split('-')[1];
		owl.goTo(slideIdx);
	});
	
	$('.next-icon').click(function() {
		owl.next();
	});
	
	$('.prev-icon').click(function() {
		owl.prev();
	});
	
	
	$('#infographic').css('background-image', 'url('+$('#infographic img').attr('src')+')');
	
	$('#open-call').css('background-image', 'url('+$('#open-call img').attr('src')+')');
	
	
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
		$('#slides-indicators').css({ top: $('.owl-item img').innerHeight()+50 });
	});
	$(window).trigger('resize');
});