$(function () {
  'use strict';
  //Toggle Sidebar
  $('.toggle-sidebar').on('click', function () {
    $('.content-area, .sidebar').toggleClass('no-sidebar');
  });
  // Toggle Submenu
  $('.toggle-submenu').on('click', function () {
    $(this).find('.fa-angle-right').toggleClass('down');
    $(this).next('.child-links').slideToggle();
  });
});