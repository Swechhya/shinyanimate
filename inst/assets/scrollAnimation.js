$.fn.inViewport = function () {
  const windowHeight = $(window).height();
  const windowTopPosition = $(window).scrollTop();
  const windowBottomPosition = windowTopPosition + windowHeight;

  const $element = $(this);
  const elementHeight = $element.outerHeight();
  const elementTopPosition = $element.offset().top;
  const elementBottomPosition = elementTopPosition + elementHeight;

  if (
    elementBottomPosition >= windowTopPosition &&
    elementTopPosition <= windowBottomPosition
  ) {
    return true;
  }

  return false;
};

$.fn.scrollAnimation = function (animationName) {
  if ($(this).inViewport()) {
    $(this).addClass('animate__animated animate__' + animationName);
    return;
  }

  $(this).removeClass('animate__animated animate__' + animationName);
};
