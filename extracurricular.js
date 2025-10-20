 // Initialize Swiper
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 1000, // Delay between slides
            },
            effect: 'fade', // Using the fade effect for smooth transitions
            speed: 1000, // Speed of transition
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // No navigation buttons
            navigation: false,
            on: {
                slideChange: function () {
                    // Pause all videos when slide changes
                    const videos = document.querySelectorAll('.swiper-slide video');
                    videos.forEach(video => video.pause());

                    // Play the video on the current slide
                    const activeSlide = this.slides[this.activeIndex];
                    const activeVideo = activeSlide.querySelector('video');
                    if (activeVideo) {
                        activeVideo.play();
                    }
                },
            },
        });


        