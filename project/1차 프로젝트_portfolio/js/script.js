$(function () {
    let mainCurrent,
        mainTotal;

    let mainSwiper = new Swiper(".mainSwiper", {
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        on: {
            init: function () {
                mainCurrent = this.realIndex + 1;
                mainTotal = this.slides.length;
                $(".main_slider .curent_num .current").text(mainCurrent);
                $(".main_slider .curent_num .total").text(mainTotal);
            },

            slideChangeTransitionEnd: function () {
                mainCurrent = this.realIndex + 1;
                $(".main_slider .curent_num .current").text(mainCurrent);
            }
        },
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: ".mainSwiper .swiper-pagination",
            clickable: true,
            // type: "fraction"
        }
    });

    $(".main_slider .prev").click(function (e) {
        e.preventDefault();
        mainSwiper.slidePrev();
    });
    $(".main_slider .next").click(function (e) {
        e.preventDefault();
        mainSwiper.slideNext();
    });
    $("#pause_play").click(function (e) { // added
        e.preventDefault();

        if ($(this).hasClass("play")) {
            $(this).removeAttr("class");
            $(this).addClass("pause");
            $(this).text("pause");
            mainSwiper
                .autoplay
                .start();
        } else {
            $(this).removeAttr("class");
            $(this).addClass("play");
            $(this).text("play");
            mainSwiper
                .autoplay
                .stop();
        }
    });

    $("#tab_menu").click(function (e) { // added
        e.preventDefault();

        // if($("#sitemap").addClass("on") == false){
        $("#sitemap").addClass("on");
        // }

    });

    $("#exit").click(function (e) {
        e.preventDefault();

        // if($("#sitemap").removeClass("on") == false){
        $("#sitemap").removeClass("on");
        // }
    });

    $("#gnb > ul > li").hover(function () {
        $("header").addClass("active");
    }, function () {
        $("header").removeClass("active");
    });

    let totalLi = $("#gnb > ul > li").length;

    $("#gnb > ul > li > a").focusin(function () {
        $(this)
            .parent()
            .addClass("active");

        if ($(this).parent().index() === 0) {
            $("header").addClass("active");
        }
    });

    let wint = 0;

    $("#gnb li li:last-child").focusout(function () {
        $(this)
            .parent()
            .parent()
            .removeClass("active");

        if ($(this).parent().parent().index() === (totalLi - 1)) {
            $("header").removeClass("active");
        }
    });

    $("#mobile > ul > li").click(function (e) {
        e.preventDefault();

        if ($("#mobile > ul > li > a img").hasClass("on") == false) {
            $("#mobile > ul > li > a img").addClass("on");
        } else {
            $("#mobile > ul > li > a img").removeClass("on");
        }
    });

    $(".family_site a").click(function (e) {
        e.preventDefault();

        if ($(".popup").hasClass("active") == false) {
            $(".popup").addClass("active");
            $(".popup").slideDown(300);
            $(".family_site img").addClass("active");
        } else {
            $(".popup").removeClass("active");
            $(".popup").slideUp(300);
            $(".family_site img").removeClass("active");
        }
    });

    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        loopedSlides: 1,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false
        },

        navigation: {
            nextEl: ".swiper .controller ul li a.next",
            prevEl: ".swiper .controller ul li a.prev"
        },

        autoplay: {
            delay: 2000
        },
        breakpoints: { // added
            100: {
                slidesPerView: 1
            },
            500: {
                slidesPerView: 1
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            850: {
                slidesPerView: 3,
                spaceBetween: 30
            },

            1170: {
                slidesPerView: 4
            }
        }
    });

    $("#tab").click(function (e) {
        e.preventDefault();

        $("body").addClass("fixed");
        $("#mobile").addClass("active")
        $(".dim").addClass("active")
    })

    $("#subexit").click(function (e) {
        e.preventDefault();

        $("body").removeClass("fixed");
        $("#mobile").removeClass("active")
        $(".dim").removeClass("active")
    })

    $(".dim").click(function (e) {
        e.preventDefault();

        $("body").removeClass("fixed");
        $("#mobile").removeClass("active")
        $(".dim").removeClass("active")
    })

    $("#mobile > ul > li").click(function (e) {
        e.preventDefault();

        if ($(this).hasClass("active") == false) {
            $("#mobile > ul > li").removeClass("active");
            $(this).addClass("active");
            $("#mobile ul ul").slideUp(300);
            $(this)
                .children("ul")
                .slideDown(300);
        } else {
            $(this).removeClass("active");
            $(this)
                .children("ul")
                .slideUp(300);
        }
    });

    let winw;

    $(window).resize(function () {
        winw = $(window).width();

        if (winw > 1490) {
            if ($("#mobile").hasClass("active")) {
                $("body").removeClass("fixed");
                $("#mobile").removeClass("active");
                $(".dim").removeClass("active");
            }
        }
    });
});
