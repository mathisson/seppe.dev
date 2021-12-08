/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
function strop(cleft, ctop, d) {
    var drop = document.createElement('div');
    drop.className = 'punct';
    drop.style.left = cleft + 'px';
    drop.style.top = ctop + 'px';
    drop.id = d;
    document.getElementById('content').appendChild(drop);
}

function randomFromInterval(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
var n, interval;

function newDrop() {
    var x = randomFromInterval(20, 480),
        y = randomFromInterval(10, 50);
    strop(x, y, n);
    n--;
    if (n > 0) {
        setTimeout(newDrop, 500);
    }
}

function start() {
    n = 30;
    newDrop();
    interval = setInterval(function() {
        var drops = document.getElementsByClassName('punct'),
            newY;
        if (drops.length == 0) {
            clearInterval(interval);
            return;
        }
        for (var i = 0; i < drops.length; i++) {
            newY = drops[i].offsetTop + 2;
            if (newY > drops[i].parentNode.offsetHeight) {
                drops[i].parentNode.removeChild(drops[i]);
            }
            else {
                drops[i].style.top = newY + 'px';
            }
        }
    }, 30);
}