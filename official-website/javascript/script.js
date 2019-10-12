$( function () {
	// 写js在这里写
	$(".section").eq(0).click(function(){
		
	})




	






	// $('#dowebok').fullpage({
	// 	scrollingSpeed : 700,						  // 滚动速度，单位为毫秒,默认为700
	// 	navigation :true,							  // 是否显示项目导航
	// 	keyboardScrolling : true,					  // 是否使用键盘导航上下左右
	// 	loopBottom : true,   						  // 滚动到最底部后是否滚回顶部
	// 	afterRender : function () {					  // 页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
	// 		// $('#box').removeClass().addClass('bounceInLeft animated');
	// 	},
	// 	afterLoad : function (anchorLink,index) {

	// 		// 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数
	// 		// anchorLink 是锚链接的名称( 必须 )
	// 		// index 是序号，从1开始计算

	// 	},
	// 	onLeave : function (index) {

	// 		// 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数
	// 		// index 是离开的“页面”的序号，从1开始计算
	// 		// nextIndex 是滚动到的“页面”的序号，从1开始计算
	// 		// direction 判断往上滚动还是往下滚动，值是 up 或 down

	// 	}
	// });

	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
		  delay: 2500,
		  disableOnInteraction: false,
		},
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		loop: 1
	  });

})