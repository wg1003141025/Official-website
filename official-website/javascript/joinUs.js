$(function () {

    $(".ho").hover(function () {
        $(".cp").eq(0).animate({
            height: "200px"
        }, 100)
    }, function () {
        $(".cp").eq(0).animate({
            height: "0px"
        }, 200)

    })

    // $(".content_con div").eq(0).siblings().hide()


    $(".content_header li").eq(0).css("color","#305FC9")
    $(".content_header li").click(function () {
        var i = $(this).index()
        $(".content_header li").eq(i).css("color","#305FC9").siblings().css("color","#000")
        $('.content_con div').eq(i).show().siblings().hide();
        // divs.eq(0).siblings().hide()
    })
})