//导航栏高亮控制
if($("body").attr("data") == "home") {
	$(".first-nav>li>a").eq(0).addClass('li-active');
	$(".first-nav>li>a").eq(0).children("span").addClass("border-active")

} else if($("body").attr("data") == "women") {
	$(".first-nav>li>a").eq(1).addClass('li-active');
	$(".first-nav>li>a").eq(1).children("span").addClass("border-active")

} else if($("body").attr("data") == "man") {
	$(".first-nav>li>a").eq(2).addClass('li-active');
	$(".first-nav>li>a").eq(2).children("span").addClass("border-active")

} else if($("body").attr("data") == "video") {
	$(".first-nav>li>a").eq(3).addClass('li-active');
	$(".first-nav>li>a").eq(3).children("span").addClass("border-active")
} else if($("body").attr("data") == "display") {
	$(".first-nav>li>a").eq(4).addClass('li-active');
	$(".first-nav>li>a").eq(4).children("span").addClass("border-active")
} else if($("body").attr("data") == "story") {
	$(".first-nav>li>a").eq(5).addClass('li-active');
	$(".first-nav>li>a").eq(5).children("span").addClass("border-active")
} else if($("body").attr("data") == "help") {
	$(".first-nav>li>a").eq(6).addClass('li-active');
	$(".first-nav>li>a").eq(6).children("span").addClass("border-active")
}

//导航栏控制
$(".second-nav li .block").mouseenter(function() {
	$(this).children("img").addClass("arrow-click")
	$(this).next(".third-nav").slideDown()
})
$(".first-nav").mouseleave(function() {
	$(".second-nav li .block").children("img").removeClass("arrow-click")
	$(".second-nav li .block").next(".third-nav").css("display", "none")
	if($("body").attr("data") == "home") {
		$(".first-nav>li>a").eq(0).addClass('li-active');
		$(".first-nav>li>a").eq(0).children("span").addClass("border-active")

	} else if($("body").attr("data") == "women") {
		$(".first-nav>li>a").eq(1).addClass('li-active');
		$(".first-nav>li>a").eq(1).children("span").addClass("border-active")

	} else if($("body").attr("data") == "man") {
		$(".first-nav>li>a").eq(2).addClass('li-active');
		$(".first-nav>li>a").eq(2).children("span").addClass("border-active")

	} else if($("body").attr("data") == "video") {
		$(".first-nav>li>a").eq(3).addClass('li-active');
		$(".first-nav>li>a").eq(3).children("span").addClass("border-active")
	} else if($("body").attr("data") == "display") {
		$(".first-nav>li>a").eq(4).addClass('li-active');
		$(".first-nav>li>a").eq(4).children("span").addClass("border-active")
	} else if($("body").attr("data") == "story") {
		$(".first-nav>li>a").eq(5).addClass('li-active');
		$(".first-nav>li>a").eq(5).children("span").addClass("border-active")
	} else if($("body").attr("data") == "help") {
		$(".first-nav>li>a").eq(6).addClass('li-active');
		$(".first-nav>li>a").eq(6).children("span").addClass("border-active")
	}
})
$(".nav .first-nav>li").mouseenter(function() {
	$(this).siblings().children("a").removeClass("li-active")
	$(this).siblings().children("a").children("span").removeClass("border-active")
	$(this).children("a").children("span").addClass("border-active")
})
$(".nav .first-nav>li").mouseleave(function() {
	$(this).children("a").removeClass("li-active")
	$(this).children("a").children("span").removeClass("border-active")
	if($("body").attr("data") == "home") {
		$(".first-nav>li>a").eq(0).addClass('li-active');
		$(".first-nav>li>a").eq(0).children("span").addClass("border-active")

	} else if($("body").attr("data") == "women") {
		$(".first-nav>li>a").eq(1).addClass('li-active');
		$(".first-nav>li>a").eq(1).children("span").addClass("border-active")

	} else if($("body").attr("data") == "man") {
		$(".first-nav>li>a").eq(2).addClass('li-active');
		$(".first-nav>li>a").eq(2).children("span").addClass("border-active")

	} else if($("body").attr("data") == "video") {
		$(".first-nav>li>a").eq(3).addClass('li-active');
		$(".first-nav>li>a").eq(3).children("span").addClass("border-active")
	} else if($("body").attr("data") == "display") {
		$(".first-nav>li>a").eq(4).addClass('li-active');
		$(".first-nav>li>a").eq(4).children("span").addClass("border-active")
	} else if($("body").attr("data") == "story") {
		$(".first-nav>li>a").eq(5).addClass('li-active');
		$(".first-nav>li>a").eq(5).children("span").addClass("border-active")
	} else if($("body").attr("data") == "help") {
		$(".first-nav>li>a").eq(6).addClass('li-active');
		$(".first-nav>li>a").eq(6).children("span").addClass("border-active")
	}
})

//帮助显示隐藏控制
$(".pc_show .help").click(function() {
	$(".pc_show .form ").css("display", "block")
})
$(".pc_show .form .title img").click(function() {
	$(".pc_show .form").css("display", "none")
})