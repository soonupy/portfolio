$(function(){
	$("#gnb > ul > li").mouseenter(function(){
				$("header .middle").addClass("active")
			});
		$("header .middle").mouseleave(function(){
			$("header .middle").removeClass("active")
		});

			$(".middle .inner #gnb > ul > li > a").focusin(function(){
			$(this).parent().addClass("active");
			$(".middle").addClass("active");;
			
		});
			$(".middle .inner #gnb li li:last-child").focusout(function(){
			$(this).parent().parent().removeClass("active");
			$(".middle").removeClass("active");
		});

    let amount=0;
    let xoffset=0;
	let winw;

	const mainSwiper=new Swiper(".main_slider .mainSwiper",{
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: { 
			el: ".swiper-pagination",
			clickable: true
			// type: "fraction"
		},
		loop: true, 
		autoplay: {
			delay: 5000,
		}
	});

	// section slider
	let x=0;
	
		function galleryMoving(){
				$(".controller li").removeClass("on");
				$(".controller li").eq(x).addClass("on");
				$(".right li").removeClass("active");
				$(".right li").eq(x).addClass("active");
			
		}
		galleryMoving();//호출이 중요.

		$(".controller li").click(function(e){
			e.preventDefault();

			$(".controller li").removeClass("on");
			$(this).addClass("on");

			x=$(this).index()
			$(".right ul li").removeClass("active")
			$(".right ul li").eq(x).addClass("active")
		});
		setInterval(function(){
			if(x < 2){
				galleryMoving();
				x++;
			}
			else{
				galleryMoving();
				x=0;
			}
		}, 1000);

		$("#location > a").click(function(e){
			e.preventDefault()
			
			if($("#location").hasClass("active") == false){
				$("#location").addClass("active")

				if($("#center").hasClass("active") == true){
					$("#center").removeClass("active")
				}
			}
			else {
				$("#location").removeClass("active")
			}
		});
		$("#center > a").click(function(e){
			e.preventDefault()
			
			if($("#center").hasClass("active") == false){
				$("#center").addClass("active")

				if($("#location").hasClass("active") == true){
					$("#location").removeClass("active")
				}
			}
			else {
				$("#center").removeClass("active")
			}
		});
	});