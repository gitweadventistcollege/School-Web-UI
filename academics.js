// Public Academics Page JS
// Initializes the Swiper slider for hero/academics section

// Expose swiper globally so that Firebase dynamic script can call swiper.update()
window.swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 2000, // ✅ 2 seconds per slide
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
