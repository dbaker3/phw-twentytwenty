(function ( $ ) {
	"use strict";

	$(function () {

		$(window).load(function() {
  			$(".twentytwenty").twentytwenty();
  			phwCustomStuff();
  			animateSlider();
		});

	});

}(jQuery));

/* A custom image slider and some other fixes - dabaker 2/2016 */
/* Instructions to show before/after images in an image slider/carousel:
	-Wrap multiple [twentytwenty] shortcodes in a <div id="twentytwenty-slider"></div> tag
	-Include caption text in a "data-caption" attribute on the before <img> tag of each image group
*/
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
    	resetPhoto();
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
		resetPhoto();
    });

	/* Fix height on resize/rotate of window */
	jQuery( window ).resize(function() {  
  		var imgHeight = jQuery('#twentytwenty-slider').height() - 40;
  		jQuery('.twentytwenty-container').css('height',imgHeight+'px');
	});
    
}

/* Move slider back to middle on photo view */
function resetPhoto() {
	var imgWidth = jQuery('#twentytwenty-slider').width()/2
	jQuery('.twentytwenty-before').css('clip','rect(0, ' + imgWidth + 'px,666px,0)')
	jQuery('.twentytwenty-handle').css('left','50%');
}


/* Move slider left and back a little to demonstrate use */
function animateSlider() {
	var imgWidth = jQuery('#twentytwenty-slider').width()/2;
	
	jQuery('.twentytwenty-handle').delay(1000).animate({
	    left:"-=100",
	  }, 1000, function() {
	    // Animation complete.
	  });
	jQuery('.twentytwenty-before').delay(1000).animate({
	    clip: 'rect(0px ' + (imgWidth - 100).toString() + 'px 666px 0px)'
	  }, 1000, function() {
	    // Animation complete.
	  });
	
	jQuery('.twentytwenty-handle').animate({
	    left:"+=100",
	  }, 1000, function() {
	    // Animation complete.
	  });
	jQuery('.twentytwenty-before').animate({
	    clip: 'rect(0px ' + imgWidth + 'px 666px 0px)'
	  }, 1000, function() {
	    // Animation complete.
	  });
}