jQuery(document).ready(function ($) {



    $(window).stellar({horizontalScrolling: false, resposive: true});
    
    var links = $('.navigation').find('.menulink');
    var plinks = $('.plink');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');



  	$("#slide2").backstretch("css/images/bg.png");

	
	
	jQuery.fn.spectragram.accessData={accessToken:'2136707.12e2743.9576ae17af4e4ad4aebf6b72433c01fd',clientID:'12e27430fe054c72839c5f16f86177e1'};

	$('#instagram-list').spectragram('getUserFeed',{
	    query: 'madametutudecor',
	    max: 10,
	    size: 'small',
	    wrapEachWith: '<div class="instagram-item"></div>'
	});

	
    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        $('.navigation li').removeClass('active');
        $('.navigation li[data-slide="' + dataslide + '"]').addClass('active');
    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
    
    	
    	
    	lastdataslide = $('.navigation li[class="menulink active"]').attr('data-slide');
    	if(lastdataslide == undefined){
    		lastdataslide = '-1';
    	}
    	
    	
    	if(dataslide>lastdataslide){
    	      htmlbody.animate({
    	          scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top + 1
    	      }, 1200, 'easeInOutQuint');
    	      
    		
    	}
    	else{
    	      htmlbody.animate({
    	          scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 1
    	      }, 1200, 'easeInOutQuint');
    	}
  
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    
    
    plinks.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });



    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
    
    
    
    $(window).scroll(function() { perform_wizardry(); });
    $(window).resize(function() { toggle_logo(); });

});

function toggle_logo() {
	var logo =$('#logo');
	
	if ($(window).width()>=1024){
	    logo.css({
	    		'opacity' : (window_scroll/700)
	    });
	}
	else{
	   	logo.css({
	    		'opacity' : 1
	    });
	}
}

function perform_wizardry() {

    window_scroll = $(this).scrollTop();

    var margin_top = parseInt((window_scroll/6)) + parseInt('0');
    
    
    
    
    $('#hero-bg').css({
    		'opacity' : 1-(window_scroll/700)
    });
    
    var logo =$('#logo');
    
    if ($(window).width()>=1024){
	    logo.css({
	    		'opacity' : (window_scroll/700)
	    });
    }
}