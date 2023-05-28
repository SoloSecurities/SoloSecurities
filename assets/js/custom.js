(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:2,
      loop:true,
      nav: true,
      margin:30,
      responsive:{
          
          992:{
              items:4
          }
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function(e) {
    e.preventDefault();
  
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  
    if (target.length) {
      var width = $(window).width();
      if (width < 991) {
        $('.menu-trigger').removeClass('active');
        $('.header-area .nav').slideUp(200);
      }
  
      var hash = this.href.split("#")[1]; // Extract the hash value from the href attribute
  
      $('html, body').animate({
        scrollTop: (target.offset().top) + 1
      }, 500, function() {
        // Update the URL with the section anchor
        window.location.hash = hash;
      });
  
      // Update menu item active state
      $('.scroll-to-section a').removeClass('active');
      $(this).addClass('active');
    }
  });
  
  $(document).ready(function() {
    $(document).on("scroll", onScroll);
  
    // Smooth scroll
    $('.scroll-to-section a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      $(document).off("scroll");
  
      $('.scroll-to-section a').each(function() {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
  
      var target = this.hash;
      var targetElement = $(target);
      if (targetElement.length) {
        $('html, body').stop().animate({
          scrollTop: (targetElement.offset().top) + 1
        }, 500, 'swing', function() {
          // Update the URL with the section anchor
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
      }
    });
  });



  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }


})(window.jQuery);
