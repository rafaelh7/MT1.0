jQuery(document).ready(function ($) {



    $(window).stellar({horizontalScrolling: false, resposive: true});
    
    var links = $('#gallerycategories').find('li');
    var small_links = $('#gallerycategories_small').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


		
	$.backstretch("../css/images/bg.png");
	
	$('.portfoliosubcategory').click( function () {
			  $('.portfoliosubcategory').removeClass('selected');
			  $(this).addClass('selected');
			  setTimeout(
			    function() 
			    {
			    	$('.portfoliosubcategory').removeClass('selected');
			    }, 1000);
		  });
		  
	
	
	
    function goToByScroll(dataslide) {
    
    	
    	
    	lastdataslide = $('.navigation li[class="active"]').attr('data-slide');
    	if(lastdataslide == undefined){
    		lastdataslide = '-1';
    	}
    	
    	
    	if(dataslide>lastdataslide){
    	      htmlbody.animate({
    	          scrollTop: $('div[data-slide="' + dataslide + '"]').offset().top - 100
    	      }, 1200, 'easeInOutQuint');
    		
    	}
    	else{
    	      htmlbody.animate({
    	          scrollTop: $('div[data-slide="' + dataslide + '"]').offset().top - 100
    	      }, 1200, 'easeInOutQuint');
    	}
  
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    
    small_links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

});




//jQuery(document).ready(function ($) {
//	  
//	  
//	  links = $('.portfoliosubcategory');
//	  slide = $('.gridgallery');
//	  htmlbody = $('html,body');
//	  
//	  
//	  $.backstretch("../css/images/bg.png");
//	  
//	  $('.gridgallery').hide();
//	  $('#galinha').toggle();
//	  
//	  $('.portfoliosubcategory').click( function () {
//		  $('.portfoliosubcategory').removeClass('selected');
//		  $(this).addClass('selected');
//	  });
//	  
//	  
	 //	  
//	  $('#galinha_cat').click( function () {
//	  	$('.gridgallery').hide();
//	  	$('#galinha').toggle();
//	  });
//	  
//	  $('#oz_cat').click( function () {
//	  	$('.gridgallery').hide();
//	  	$('#oz').toggle();
//	  });
//	  
//	  
//	  $('#birds_cat').click( function () {
//	  	$('.gridgallery').hide();
//	  	$('#birds').toggle();
//	  });
//	  
//	  $('#fadas_cat').click( function () {
//	  	$('.gridgallery').hide();
//	  	$('#fadas').toggle();
//	  });
//	  
//	  
//	  $('#circo_cat').click( function () {
//	  	$('.gridgallery').hide();
//	  	$('#circo').toggle();
//	  });
//	  
//	  $('#moranguinho_cat').click( function () {
//	  	$('.gridgallery').hide();
//	  	$('#moranguinho').toggle();
//	  });
//	  
//	  
//	  
//	  
//	  $('#casamento_cat').click( function () {
//	  	$('.gridgallery').hide();
//	  	$('#casamento').toggle();
//	  	
//	  });
//	  
//	  $('#cha_cat').click( function () {
//	  	$('.gridgallery').hide();
//	  	$('#cha').toggle();
//	  });
//	  
//	  
//
//
//	slide.waypoint(function (event, direction) {
//
//        dataslide = $(this).attr('data-slide');
//    });
//    
//    
//	function goToByScroll(dataslide) {
//	
//		
//		
//		lastdataslide = $('.navigation li[class="active"]').attr('data-slide');
//		if(lastdataslide == undefined){
//			lastdataslide = '-1';
//		}
//		
//		
//		if(dataslide>lastdataslide){
//		      htmlbody.animate({
//		          scrollTop: $('.gridgallery[data-slide="' + dataslide + '"]').offset().top + 1
//		      }, 1200, 'easeInOutQuint');
//			
//		}
//		else{
//		      htmlbody.animate({
//		          scrollTop: $('.gridgallery[data-slide="' + dataslide + '"]').offset().top - 1
//		      }, 1200, 'easeInOutQuint');
//		}
//	
//	}
//	
//	
//    links.click(function (e) {
//        e.preventDefault();
//        dataslide = $(this).attr('data-slide');
//        goToByScroll(dataslide);
//    });
//
//
//});