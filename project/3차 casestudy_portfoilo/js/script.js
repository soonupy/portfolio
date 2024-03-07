$(function () {
    $("nav > ul > li").hover(function () {
        // $("header").removeClass("on");
        $("inner").addClass("on");
    })
    $(function () {
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                // type: "fraction"
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            speed: 1200,
            effect: "slide",
            fadeEffect: {
                crossFade: true
            },
            loop: true,
            autoplay: {
                delay: 500000,
                disableOnInteraction: false
            }
		});
});
});