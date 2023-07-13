const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
    },
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });