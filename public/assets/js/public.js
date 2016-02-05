(function ( $ ) {
	"use strict";

	$(function () {

		$(window).load(function() {
  			$(".twentytwenty").twentytwenty();
  			phwCustomStuff();
		});

	});

}(jQuery));

/* A custom image slider - dabaker 2/2016 */
function phwCustomStuff() {

    var numPhotos = jQuery('.twentytwenty-wrapper').length;
	var currentPhoto = 0; 
    
   	for (var i = 1; i < numPhotos; i++) {
   		jQuery('.twentytwenty-wrapper').eq(i).hide();
	}
	
	jQuery('#twentytwenty-caption').html(jQuery('.twentytwenty-container').eq(0).attr('data-caption'));
    
    jQuery('#nextphoto').click(function() {
    	if (currentPhoto + 1 < numPhotos) {
    		jQuery('.twentytwenty-wrapper').eq(currentPhoto + 1).show();
    		jQuery('.twentytwenty-wrapper').eq(currentPhoto).hide();
    		currentPhoto++;
    	}
    	else {
    		jQuery('.twentytwenty-wrapper').eq(currentPhoto).hide();
    		currentPhoto = 0;	
    		jQuery('.twentytwenty-wrapper').eq(currentPhoto).show();
    	}
    	jQuery('#twentytwenty-caption').html(jQuery('.twentytwenty-container').eq(currentPhoto).attr('data-caption'));
    });
    
    jQuery('#prevphoto').click(function() {
    	if (currentPhoto == 0) {
    		jQuery('.twentytwenty-wrapper').eq(numPhotos - 1).show();
    		jQuery('.twentytwenty-wrapper').eq(currentPhoto).hide();
    		currentPhoto = numPhotos - 1;
    	}
    	else {
    		jQuery('.twentytwenty-wrapper').eq(currentPhoto).hide();
    		currentPhoto--;	
    		jQuery('.twentytwenty-wrapper').eq(currentPhoto).show();
    	}
		jQuery('#twentytwenty-caption').html(jQuery('.twentytwenty-container').eq(currentPhoto).attr('data-caption'));
    });
    
}