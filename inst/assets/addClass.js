$.fn.animateCss = function (animationName, callback) {
  var animationEnd = (function (el) {
    var animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'mozAnimationEnd',
      WebkitAnimation: 'webkitAnimationEnd',
    };

    for (var t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  })(document.createElement('div'));

  this.addClass('animate__animated animate__' + animationName).one(
    animationEnd,
    function () {
      $(this).removeClass('animate__animated animate__' + animationName);

      if (typeof callback === 'function') callback();
    }
  );

  return this;
};

$.fn.animateHover = function (animationName) {
  $(this).on('mouseover', function () {
    $(this).addClass('animate__animated animate__' + animationName);
  });
  $(this).on('mouseout', function () {
    $(this).removeClass('animate__animated animate__' + animationName);
  });
};

$(document).ready(function () {
  Shiny.addCustomMessageHandler('addClass', function (message) {
    if ( $.fn.validDelay(message['delay'])) {
      setTimeout(function () {
        $('#' + message['ele']).animateCss(message['name']);
      }, message['delay']);
      return;
    }
    $('#' + message['ele']).animateCss(message['name']);
  });

  Shiny.addCustomMessageHandler('addClassHover', function (message) {
    $('#' + message['ele']).animateHover(message['name']);
  });

  Shiny.addCustomMessageHandler('addClassScroll', function (message) {
    $(document).on('scroll', function () {
      let scrollTimeout;
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
          $('#' + message['ele']).scrollAnimation(message['name']);
          scrollTimeout = null;
        }, 1000 / 60);
      }
    });
  });
});
