$(window).on('load', function () {
    $('.js-garellySlider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        infinite: true,
        pauseOnHover: false,
        cssEase: 'linear',
        centerMode: true,
        centerPadding: '1%',
        slidesToShow: 5,
        //slidesToScroll: 1,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});