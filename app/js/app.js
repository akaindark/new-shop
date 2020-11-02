
$(function () {
  //Slider-1

  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  //Slider-2

  $('.spec__slider').slick({
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  //Gamburger

  $('.header__menu-btn').on('click', function () {
    $('.menu').slideToggle();
  });

  //lowScroll

  $('.menu__link').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top + 'px'
    }, {
      duration: 1000,
      easing: 'swing'
    });
    return false;
  });

  //backToTop

  function backToTop() {
    let button = $('.btn-up');

    $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 1000) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });
    button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({ scrollTop: 0 }, 1500);
    })
  }
  backToTop();

  //Video


});

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '500',
    playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo': 0, 'rel': 0 },
    width: '850',
    videoId: '76snA2_wTPg',
    events: {
      'onReady': onPlayerReady
    }
  });
}
