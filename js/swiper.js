var swiper = new Swiper('.shows__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.shows__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.shows__swiper-button-next',
      prevEl: '.shows__swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      667: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      414: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
    }
});

var swiper = new Swiper('.podcasts__swiper', {
  // slidesPerView: 7,
  spaceBetween: 30,
  pagination: {
    el: '.podcasts__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.podcasts__swiper-button-next',
    prevEl: '.podcasts__swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 7,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 6,
      spaceBetween: 20
    },
    667: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 15
    }
  },
});

var swiper = new Swiper('.clips__swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.clips__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clips__swiper-button-next',
    prevEl: '.clips__swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    667: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    414: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
  }
});