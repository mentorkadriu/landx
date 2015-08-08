$(document).ready(function() {

// Initialze Foundation zurb fouctionality

	$(document).foundation();

// Initialize Smooth-Scrolling
	smoothScroll.init({
		offset: 65 // Integer. How far to offset the scrolling anchor location in pixels
	});


//  Add and remove class when user clicks navigation links

	$('.top-bar-section .right li').click(function(){
	    $('.top-bar-section .right li').removeClass('active');
	    $(this).addClass('active');
	});

// Initialize Headroom.js for displaying navigation when user scrolles down
	
	// grab an element
	var myElement = document.getElementById('headroom');
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement, {
	    // vertical offset in px before element is first unpinned
	    offset : 100,
	    // scroll tolerance in px before state changes
	    tolerance : 30,
	    // css classes to apply
	    classes : {
	        // when element is initialised
	        initial : "headroom",
	        // when scrolling up
	        pinned : "headroom--pinned",
	        // when scrolling down
	        unpinned : "headroom--unpinned",
	        // when above offset
	        top : "headroom--top",
	        // when below offset
	        notTop : "headroom--not-top"
	    },
	    // element to listen to scroll events on, defaults to `window`
	    //scroller : someElement,
	    // callback when pinned, `this` is headroom object
	    onPin : function() {
	    },
	    // callback when unpinned, `this` is headroom object
	    onUnpin : function() {
	    },
	    // callback when above offset, `this` is headroom object
	    onTop : function() {},
	    // callback when below offset, `this` is headroom object
	    onNotTop : function() {},
	});
	// initialise
	headroom.init();


// Initialze Owl carousel for  Product ScreenShots

	$("#slider").owlCarousel({ 
	 	 items: 3, //3 items above 1000px browser width
	     itemsDesktop: [1000, 3], //3 items between 1000px and 901px
	     itemsDesktopSmall: [900, 2], // betweem 900px and 601px
	     itemsTablet: [600, 1], //1 items between 600 and 0
	     itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
	     navigation: false, // Show next and prev buttons
	     slideSpeed: 800,
	     paginationSpeed: 400,
	     autoPlay: 5000,
	     stopOnHover: true	
	});

// Initialze Owl carousel for  Testimonails

	$("#trusted-clients").owlCarousel({ 
	 	 items: 3, //3 items above 1000px browser width
	     itemsDesktop: [1000, 2], //2 items between 1000px and 901px
	     itemsDesktopSmall: [900, 2], // betweem 900px and 601px
	     itemsTablet: [600, 1], //1 items between 600 and 0
	     itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
	     navigation: false, // Show next and prev buttons
	     stopOnHover: true
	});
                  
});// End Jquery
