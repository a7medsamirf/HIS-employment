/*************************************
 * 
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Version: 1.0

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/


/* ==================================
Start SideNav
===================================== */

// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var el = document.querySelector('.custom-scrollbar');
Ps.initialize(el);


/* ==================================
start loading 
===================================== */

$('.fixed-menu .show').on('click', function () {
      $(this).parent('.fixed-menu').toggleClass('is-visible');
      if ($(this).parent('.fixed-menu').hasClass('is-visible')) {
            $(this).parent('.fixed-menu').animate({
                  right: 0
            }, 500);
            $('body').animate({
                  paddingleft: '350px'
            }, 50);
      } else {
            $(this).parent('.fixed-menu').animate({
                  right: '-350px'
            }, 700);
            $('body').animate({
                  paddingleft: 0
            }, 500);
      }
});

/* ==================================
start datepicker 
===================================== */

$('.datepicker').pickadate({
      weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      showMonthsShort: true
})


/* ==================================
Search
===================================== */

$('.show-search').click(function () {
      $('.full-search').fadeIn(300);
      $('.full-search input').focus();
});
$('.full-search input').blur(function () {
      $('.full-search').fadeOut(300);
});

// Material Select Destroy
$('.mdb-select').materialSelect({
      destroy: true
      });
      