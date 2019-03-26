(function() {       //wrap an anonymous function to localize variables
  'use strict';       //translate the code in strict mode

  function trackScroll() {        //create function
    var scrolled = window.pageYOffset;        //create a variable, in which will be the scroll value of the page

    if (scrolled > 100) {       //if the scroll value is greater than 100px
      goTopBtn.classList.add('back_to_top-show');       //assign a new class to the element found
    }
    if (scrolled < 100) {       //if the scroll value is less than 100 pixels
      goTopBtn.classList.remove('back_to_top-show');        //remove new class from found element
    }
  }

  function backToTop() {        //create function 
    if (window.pageYOffset > 0) {      //if page scrolling is greater than 0
      window.scrollBy(0, -40);        //scroll the page up 40px
      setTimeout(backToTop, 0);      //recursively call the function every 0 seconds
    } 
  }

  var goTopBtn = document.querySelector('.back_to_top');       //create a variable, that finds the first element with this selector 

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);        //set the "click" event handler to a variable
})();
