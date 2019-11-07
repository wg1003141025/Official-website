$(function () {
	$(".cuspend_content ul").eq(0).hide()
	$("#dn").hide()
	$(".cuspend_header").eq(0).click(function () {
		$(".cuspend_content ul").eq(0).show()
		$("#dn").show()
	})

	$("#dn").click(function () {

		$(".cuspend").eq(0).hide()

	})
	$(".ho").hover(function () {
		$(".cp").eq(0).animate({
			height: "151px"
		}, 100)
	}, function () {
		$(".cp").eq(0).animate({
			height: "0px"
		}, 200)


	})

	//获取验证码
	var d = 60
	var tim = null
	$("#hq").click(function () {
		$("#hq").attr("disabled", "disabled")
		tim = setInterval(function () {
			d--
			$("#hq").html(d + "s后重新获取")
			if (d == 0) {
				$("#hq").removeAttr("disabled")
				$("#hq").html("重新获取")
				clearInterval(tim)
				d = 60
			}
		}, 1000)
	})


	//提交
	$("#tj").click(function () {
		action("提交成功")
	})

	//立即体验
	$(".popUp").eq(0).hide()
	$("#lj").click(function () {
		$(".popUp").eq(0).show()
	})



	//关闭
	$("#gb").click(function () {
		$("#hq").removeAttr("disabled")
		$(".popUp").eq(0).hide()
		clearInterval(tim)
		$("#hq").html("获取验证码")
		for (var i = 0; i < $(".popUp_co input").length; i++){
			$(".popUp_co input").eq(i).prevObject.val("")
		}
		$("#tj").show()
		$(".yc").show()
		$("#zhuce").hide()
	})

	//注册
	$("#zc").click(function(){
		
	})
	//注册成功按钮
	

	//注册和提交
function action(at){
	for (var i = 0; i < $(".popUp_co input").length; i++){
			var va = $(".popUp_co input").eq(i).val()
			if ($(".popUp_co input").eq(i).val() == "") {
				alert("不能为空")
				return false
			} else {
				$(".popUp").eq(0).hide()
				clearInterval(tim)
				$("#hq").html("获取验证码")
				alert(at)
				$(".popUp_co input").eq(i).prevObject.val("")
				return false
			}
		}
}












	var swiper = new Swiper('#roof .swiper-container', {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '#roof .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '#roof .swiper-button-next',
			prevEl: '#roof .swiper-button-prev',
		},
		loop: 1
	});
	var swiper = new Swiper('.se_oh .swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: '.se_oh .swiper-pagination',
		paginationClickable: true,
		// Disable preloading of all images
		preloadImages: false,
		// Enable lazy loading
		lazyLoading: true,
		slidesPerView: "auto",
		slidesPerView: 3.08,
	});

})