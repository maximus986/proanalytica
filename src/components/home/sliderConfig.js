export const heroSliderSettings = {
  autoplay: true,
  autoplaySpeed: 8000,
  infinite: true,
  speed: 5000,
  fade: true,
  cssEase: 'ease',
  pauseOnHover: false,
  arrows: false,
};

export const testimonialSliderSettings = {
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 3000,
  fade: false,
  cssEase: 'linear',
  pauseOnHover: false,
  arrows: false,
  dots: true,
};

export const partnerSliderSettings = {
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 1000,
  fade: false,
  cssEase: 'linear',
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 2600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
