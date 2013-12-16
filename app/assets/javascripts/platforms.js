$(document).ready(function() {
	if($.isDefined('.platforms')) {
		var agroupers = $('.agrouper');
		for(var index in agroupers) {
			var agrouperId = $(agroupers[index]).attr('id');
			var groupedOnes = $('#'+agrouperId).next('.company-list').children();
			for(var idx in groupedOnes) {
				if($(groupedOnes[idx]).hasClass('company')) {
					$(groupedOnes[idx]).children(':not(.'+agrouperId+')').parent().remove();
				} 
			}
		}
	}
});