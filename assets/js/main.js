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

  const swiperNavigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  };

  new Swiper('#intro', {
    autoplay: generateDelay(delays.INTRO),
    direction: directions.INTRO,
    loop: true,
    navigation: swiperNavigation,
  });

  new Swiper('#record-videos', {
    autoplay: generateDelay(delays.RECORDS),
    direction: directions.RECORDS,
    loop: true,
    navigation: swiperNavigation,
    slidesPerView: 3,
    spaceBetween: 12,
    autoHeight: true,
    centeredSlides: true
  });
})(SwiperDelays, SwiperDirections);