//导航栏控制
		$(".mobile_show .nav .menu").click(function() {
			$(".mobile_show .menu-wrap").animate({
				left:0
			})
			$("body").css("overflow-y","hidden")
			$(".mobile_show .menu-wrap").css("overflow-y","auto")
		})
		$(".mobile_show .menu-wrap .cha").click(function() {
			$(".mobile_show .menu-wrap").animate({
				left:"-100%"
			})
			$(".mobile_show .menu-wrap").css("overflow-y","hidden")
			$("body").css("overflow-y","auto")
		})
		$(".mobile_show .menu-wrap .nav-one>li>.one").click(function() {
			if($(this).next(".add").next(".nav-two").css("display") == "block") {
				$(this).next(".add").next(".nav-two").slideUp()
				$(this).next(".add").next(".nav-two").children("li").children(".arrow").removeClass("arrow-active")
				$(this).next(".add").text("+")
			} else {
				$(this).parents("li").siblings().children(".nav-two").slideUp()
				$(this).parents("li").siblings().children(".nav-two").children(".tog").children(".arrow").removeClass("arrow-active")
				$(this).parents("li").siblings().children(".add").text("+")
				$(this).next(".add").next(".nav-two").children(".tog").children(".nav-three").slideUp()
				$(this).next(".add").text("-")
				$(this).next(".add").next(".nav-two").slideDown()
			}
		})
		$(".mobile_show .menu-wrap .nav-one>li>.nav-two>.tog").click(function() {
			if($(this).children(".nav-three").css("display") == "block") {
				$(this).children(".arrow").removeClass("arrow-active")
				$(this).children(".nav-three").slideUp()
			} else {
				$(this).siblings(".tog").children(".nav-three").slideUp()
				$(this).siblings(".tog").children(".arrow").removeClass("arrow-active")
				$(this).children(".nav-three").slideDown()
				$(this).children(".arrow").addClass("arrow-active")
			}
		})
		//help 显示隐藏
		$(".mobile_show .help").click(function() {
			$(this).css("display", "none")
			$(".mobile_show .help-content ").css("display", "block")
			$("body").css("overflow-y","hidden")
		})
		$(".mobile_show .help-content img").click(function() {
			$(".mobile_show .help-content ").css("display", "none")
			$(".mobile_show .help").css("display", "block")
			$("body").css("overflow-y","auto")
		})
		$(".mobile_show .help-content form .btn-wrapper input").on('touchstart', function() {
			$(this).siblings().removeClass("input-active")
			$(this).addClass("input-active")
			$(this).on('touchend', function() {
				$(this).removeClass("input-active")
			})
		})