const swiper = new Swiper('#intro', {
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });