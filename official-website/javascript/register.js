$(function () {
	var d = 60
	var tim = null
	$("#hq").click(function () {
		if ($(".popUp_co input").eq(1).val() == "") {
			console.log($(".popUp_co input").eq(1).val().length)
			alert("请输入手机号")
		} else {
			console.log($(".popUp_co input").eq(1).val().length)
			if ($(".popUp_co input").eq(1).val().length == 11) {
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
			}else{
				alert("请输入正确的手机号")
			}
		}
	})
	$("#tj").click(function () {
		for (var i = 0; i < $(".popUp_co input").length; i++) {
			var va = $(".popUp_co input").eq(i).val()
			if ($(".popUp_co input").eq(i).val() == "") {
				alert("不能为空")
				return false
			} else {
				$(".popUp").eq(0).hide()
				clearInterval(tim)
				$("#hq").html("获取验证码")
				alert("注册成功")
				window.location.href = "index.html"
				$(".popUp_co input").eq(i).prevObject.val("")
				return false
			}
		}
	})
})