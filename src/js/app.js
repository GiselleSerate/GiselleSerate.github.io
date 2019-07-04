require('../scss/main.scss');
var $ = require('jquery');

$(document).ready(function() {
  var timeout = null;

  $(window).scroll(function () {
    if(!timeout) {
      timeout = setTimeout(function () {
        clearTimeout(timeout);
        timeout = null;
        if($(window).scrollTop() <= 50) {
          $('#header').removeClass('minimized');
        }
        else if($(window).scrollTop() >= 80) {
          $('#header').addClass('minimized');
        } // Small dead zone where it just stays however the heck it was. 
      }, 250);
    }
  });

});
