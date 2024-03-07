$(function () {
    // 탭 클릭 이벤트
    $('#tab').on('click', function (e) {
        e.preventDefault();
        $('.tab_nav, #dim, .dev h2, #tab a i, .dev').toggleClass('active');
    });

    // 타이핑 효과
    new TypeIt("#typed", {
        speed: 75,
        waitUntilVisible: true,
    })
        .type("<strong>FRONT</strong>", { delay: 300 })
        .type("<strong>-AND</strong>")
        .move(0, { delay: 500 })
        .delete(3)
        .type("<strong>END</strong>")
        .move(2)
        .pause(500)
        .break({ delay: 500 })
        .type("<strong>DEVELOPER</strong>")
        .break(2, { delay: 500 })
        .break()
        .type("WEB PORTFOLIO&nbsp")
        .pause(1000)
        .delete()
        .type("<strong>처음<br>뵙겠습니다.</strong>", { delay: 300 })
        .type("<br>전,<br>권순우입니다.")
        .go();

    // GSAP 스크롤트리거
    gsap.registerPlugin(ScrollTrigger);
    ["#intro", "#profile_license .top", "#profile_license .content", "#skills", "#viewwork"].forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: -50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "bottom",
                toggleActions: "play",
            }
        });
    });
});
