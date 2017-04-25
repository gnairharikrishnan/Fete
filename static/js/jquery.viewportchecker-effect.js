jQuery(document).ready(function() {

    "use strict";

    jQuery('.scroll-fadeIn').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
	    offset: 100    
	});

	jQuery('.scroll-fadeInDown').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 100    
    });

	jQuery('.scroll-fadeInUp').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
	    offset: 100    
	});

	jQuery('.scroll-flash').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated flash', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.scroll-pulse').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated pulse', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.scroll-fadeInRight').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.scroll-fadeInLeft').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.scroll-zoomIn').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated zoomIn', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.scroll-zoomInLeft').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated zoomInLeft', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.scroll-zoomInRight').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated zoomInRight', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.scroll-zoomInUp').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated zoomInUp', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.scroll-pulse').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated pulse', // Class to add to the elements when they are visible
	    offset: 100    
	});	
	jQuery('.scroll-bounceIn').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceIn', // Class to add to the elements when they are visible
	    offset: 100    
	});	
	jQuery('.scroll-bounceInUp').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.scroll-bounceInDown').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
	    offset: 100    
	});	
});