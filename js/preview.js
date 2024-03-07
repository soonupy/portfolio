$(function() {
    // 'hidden_btn' 클릭 이벤트 처리
    $('.hidden_btn').click(function(e) {
        e.preventDefault(); // 기본 이벤트 방지
        $(this).closest('li').find('.desc').fadeToggle(0); // 해당 설명 토글
        $(this).toggleClass('rotate'); // 버튼 회전 토글
    });

    // 'tab' 클릭 이벤트 처리
    $('#tab').click(function(e) {
        e.preventDefault();
        $('.tab_nav, #dim, .dev h2, #tab a i, .dev').toggleClass('active'); // 요소들의 active 클래스 토글
    });
});

// GSAP 스크롤트리거
gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function() {
    gsap.utils.toArray('#project .inner ul li').forEach((li) => {
        gsap.from(li, {
            scrollTrigger: {
                trigger: li,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.2
        });
    });
});
