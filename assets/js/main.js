(function(delays, directions) {
  const generateDelay = (delay) => {
      if (delay <= 0) {
          return false;
      }
  
      return {
          delay: delay,
          pauseOnMouseEnter: true,
      };
  }

  const swiperButtonNextClass = 'swiper-button-next';
  const swiperButtonPrevClass = 'swiper-button-prev';

  new Swiper('#intro', {
    autoplay: generateDelay(delays.INTRO),
    direction: directions.INTRO,
    loop: true,
    navigation: {
      nextEl: `.${swiperButtonNextClass}`,
      prevEl: `.${swiperButtonPrevClass}`,
    },
  });
})(SwiperDelays, SwiperDirections);