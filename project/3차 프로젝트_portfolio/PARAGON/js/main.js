$(function () {
    $('.language a').on('click', function (e) {
        e.preventDefault()
        $('.language ul').slideToggle('on');
        $('.language a img').toggleClass('on');
    });
    $("#tab a").on("click", function (e) {
        e.preventDefault();
        $('.menu').toggleClass('active');
        $("#dim").addClass('on');
    });

    $(".menu .close").on("click", function (e) {
        e.preventDefault();
        $('.menu').removeClass("active");
        $("#dim").removeClass('on');
    });

	$(".menu > ul > li > a").on("click", function (e) {
		e.preventDefault();

		if($(this).hasClass("active") === false){ // 닫힌 코드
			$(".menu > ul > li > a").removeClass("active");
			$(this).addClass("active");

			$(".menu .dropdown").slideUp(300);
			$(this).next().slideDown(300);
		}
		else{ // 열린 코드
			$(this).removeClass("active");
			$(this).next().slideUp(300);
		}
	});
});