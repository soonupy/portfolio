$(function () {

    // top버튼 :: 2초마다 한번씩 위로가기
    setInterval(function() {
        // 현재 위치 가져오기
        var currentPosition = $(window).scrollTop();

        // #go_top_btn에 대한 튕기는 효과
        $("#go_top_btn").animate({ bottom: '+=20px' }, 1000, function() {
            // 튕긴 후 0.5초 동안 대기한 후 다시 원래 위치로 이동
            $(this).animate({ bottom: '30px' }, 1000);
        });

    }, 3000);
    // 웹 브라우져 맨 위로 스크롤되는 효과
    document
        .getElementById("go_top_btn")
        .addEventListener("click", function (e) {
            e.preventDefault
            // 웹 브라우저 맨 위로 스크롤
            window.scrollTo({
                top: 0, behavior: "smooth" // 부드러운 스크롤 효과
            });
            slowScroll();
        });
    // tab open&close
    $('.inner #tab').on('click', function (e) {
        e.preventDefault()
        $('.inner #tab').toggleClass('on');
        $('.brand_view').slideUp(200);
    });

    // 모바일 탭
    $('.inner #tab').on('click', function (e) {
        e.preventDefault()
        $(".inner #mobile_gnb").toggleClass('active');
        $("header .inner .logo, header .inner").toggleClass('tab_active');
        $("#dim").toggleClass('tab_dim');
        $(".inner #mobile_gnb ul").toggleClass('on');
    });
    $("#dim").on("click", function (e) {
        e.preventDefault()

        $(".inner #mobile_gnb").removeClass('active');
        $("header .inner .logo, header .inner").removeClass('tab_active');
        $("#dim").removeClass('tab_dim');
        $(".inner #mobile_gnb ul").removeClass('on');
        $('.inner #tab').removeClass('on');
    })
    $('li.buy_my_car, li.hi_lab').on('click', function (e) {
        e.preventDefault()
        $('.brand_view').stop().slideUp(200);
        $(this).find('.brand_view').stop().slideToggle(200);
        
    })
    

    // 스와이퍼 js
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: "1.5",
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        loop: true,
        loopAdditionalSlides: 1,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            460: {
                slidesPerView: 1
            },
            720: {
                slidesPerView: 1
            },
            960: {
                slidesPerView: 1
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    })
    $('.swiper-button-prev').hover(function () {
        $("li.prev").addClass('on');
    }, function () {
        $("li.prev").removeClass('on');
    });
    $('.swiper-button-next').hover(function () {
        $("li.next").addClass('on');
    }, function () {
        $("li.next").removeClass('on');
    });
    // var video = $("#main_video")[0];  비디오 엘리먼트를 가져옴      비디오가 종료될 때마다 이벤트를 감지
    // $(video).on("ended", function () {          영상이 종료되면 다시 재생 video.play(); });
    window.addEventListener("load", function () {

        let video = document.getElementById("main_video");

        video.addEventListener("loadeddata", function () {
            video.muted = true;
            // console.log("loaded event");
            video.play();
        });

        video.addEventListener("ended", function () {
            // console.log("ended event");
            video.currentTime = 1;
            video.play();
        })

    })
    // 반응형
    function changeContent() {
        console.log("resize");
        var element = document.querySelector('#top h2');
        if (window.innerWidth <= 720) {
            element.innerHTML = 'Hi-LAB';
        } else {
            element.innerHTML = 'Hyundai<br>intelligence<br>LAB';
        }
        var interval = 1000;
    }

    // 초기화 및 리사이즈 이벤트에 대한 핸들러 등록
    changeContent(); // 초기화
    window.addEventListener('resize', changeContent); // 리사이즈 이벤트 감지
    //header scroll
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        var scrollY = window.scrollY;

        // 스크롤 위치에 따라 헤더의 클래스를 추가/제거합니다.
        if (scrollY > 400) {
            header
                .classList
                .add('scrolled');
        } else {
            header
                .classList
                .remove('scrolled');
        }
    });
});
