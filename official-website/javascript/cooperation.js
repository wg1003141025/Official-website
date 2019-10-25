$(function(){
    
	$(".ho").hover(function () {
		$(".cp").eq(0).animate({
			height: "200px"
		}, 100)
	}, function () {
		$(".cp").eq(0).animate({
			height: "0px"
		}, 200)

	})
})