$(function() {
    // 'more' 버튼 클릭 이벤트
    $('.more').click(function(e) {
        e.preventDefault();
        $('.inner .list a:nth-child(n+4), .more a p, .more i').toggleClass('on');
    });

    // 'tab' 클릭 이벤트
    $('#tab').click(function(e) {
        e.preventDefault();
        $('.tab_nav, #dim, .dev h2, #tab a i, .dev').toggleClass('active');
    });
});