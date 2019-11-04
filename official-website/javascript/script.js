$(function () {
	$(".cuspend_content ul").eq(0).hide()
	$("#dn").hide()
	$(".cuspend_header").eq(0).click(function () {
		$(".cuspend_content ul").eq(0).show()
		$("#dn").show()
	})
	$(window).keydown((27),function(){
		$(".popUp").eq(0).hide()
	})

	$("#dn").click(function () {
		
			$(".cuspend").eq(0).hide()
		
	})
	$(".ho").hover(function () {
		$(".cp").eq(0).animate({
			height: "200px"
		}, 100)
	}, function () {
		$(".cp").eq(0).animate({
			height: "0px"
		}, 200)

	})
	$(".popUp").eq(0).hide()
	$("#lj").click(function(){
		$(".popUp").eq(0).show()
	})
	$("#gb").click(function(){
		$(".popUp").eq(0).hide()
	})
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
		slidesPerView:"auto",
		slidesPerView: 3.08,
    });
	
})