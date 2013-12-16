$(document).ready(function() {
	if($.isDefined('#companies')) {
		
		var category = null;
		var generation = null;
		
		var buildHashURL = function() {
			if(category == null && generation == null) {
				window.location.hash = "#/";
			} else if(category == null) {
				window.location.hash = "#/"+generation;
			} else if(generation == null) {
				window.location.hash = "#/"+category;
			} else {
				window.location.hash = "#/"+generation+'/'+category;
			}
		}

		$('#categories').bind('change', function() {
			category = $(this).val();
			if(category==0) {
				category = null;
			}
			buildHashURL();
		});
		
		$('#generations').bind('change', function() {
			generation = $(this).val();
			if(generation=='generation-0') {
				generation = null;
			}
			buildHashURL();
		});

		Path.map("#/").to(function() {
			$('.company').fadeIn();
		});

		Path.map('#/:group_one(/:group_two)').to(function() {
			$('.company').fadeOut();
			
			if(this.params['group_two'] != undefined) {
				$('.'+this.params['group_two']+'.'+this.params['group_one']).parent('.company').fadeIn();
			} else {
				$('.'+this.params['group_one']).parent('.company').fadeIn();
			}
		});

		Path.root("#/");
		Path.listen();
	}
	
});