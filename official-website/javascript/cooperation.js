$(function(){
    
	$(".ho").hover(function () {
		$(".cp").eq(0).animate({
			height: "151px"
		}, 100)
	}, function () {
		$(".cp").eq(0).animate({
			height: "0px"
		}, 200)

	})
})