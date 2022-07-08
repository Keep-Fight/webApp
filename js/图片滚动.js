$(function() {
	var latenum = 0;
	var lataYnum;
	// 判断照片个数
	var ItemLength = $(".Exhibition_item").length;
	ItemLength - 5 > 0 ? HLength() : NLength();

	function NLength() {
		console.log("false")
		$(".ProductExhibition").hover(function() {
			$(".icon_RImg").css("top", "640px")
		})
	}

	function HLength() {
			// 点击 切换上下
			// 下
		$(".icon_RImg").click(function() {
			latenum += 1;

			let ylatenum = -latenum * 125 + "px";
			if (latenum == ItemLength - 5) {
				$(".icon_RImg").css("top", "640px");
				$(".icon_LImg").css("top", "0px");
				$(".ProductExhibition").mouseover(function() {
					$(this).find(".icon_RImg").css("top", "640px")
					$(this).find(".icon_LImg").css("top", "0px")

				})
				$(".ProductExhibition").mouseout(function() {
					$(this).find(".icon_RImg").css("top", "640px")
					$(this).find(".icon_LImg").css("top", "0px")
				})
				return changeCss(ylatenum)

			} else if (latenum != ItemLength - 5) {

				$(".icon_RImg").css("top", "594px");
				$(".icon_LImg").css("top", "0");
				$(".ProductExhibition").mouseover(function() {
					$(this).find(".icon_RImg").css("top", "594px")
					$(this).find(".icon_LImg").css("top", "0px")
				})
				$(".ProductExhibition").mouseout(function() {
					$(this).find(".icon_RImg").css("top", "640px")
					$(this).find(".icon_LImg").css("top", "-50px")
				})
				return changeCss(ylatenum)

			}
		})

	   // 上
		$(".icon_LImg").click(function() {
			latenum -= 1;
			let ylatenum = -latenum * 125 + "px";
			if (latenum == 0) {
				$(".icon_LImg").css("top", "-50px");
				$(".icon_RImg").css("top", "594px");
				$(".ProductExhibition").mouseover(function() {
					$(this).find(".icon_LImg").css("top", "-50px")
					$(".icon_RImg").css("top", "594px");
				})
				$(".ProductExhibition").mouseout(
					function() {
						$(this).find(".icon_LImg").css("top", "-50px")
						$(".icon_RImg").css("top", "594px");
					})
				return changeCss(ylatenum)

			} else if (latenum != 0) {
				$(".icon_RImg").css("top", "594px");
				$(".icon_LImg").css("top", "-50px");
				$(".ProductExhibition").mouseover(function() {
					$(this).find(".icon_RImg").css("top", "594px")
					$(this).find(".icon_LImg").css("top", "0px")
				})
				$(".ProductExhibition").mouseout(
					function() {
						$(this).find(".icon_RImg").css("top", "640px")
						$(this).find(".icon_LImg").css("top", "-50px")
					})
				changeCss(ylatenum)
			}
		})
	}

	// 位移
	function changeCss(ylatenum) {
		$(".Exhibition_num").css({
			"transform": "translate3d(0px, " + ylatenum + ",0px)",
			"transition-duration": "300ms"
		});
	}

	// 点击item
	$(".Exhibition_item").click(function() {
		$(".Exhibition_item").removeClass("czt_active")
		$(this).addClass("czt_active")
		var cahngeX = -$(this).index() * 622 + "px";
		var trachangeX = $(this).index() * 125 + "px";
		$(".ProductExhibition_box").css("transform", "translate3d(0px," + cahngeX + ",0px)")
		$(".Exhibition_items").css("transform", "translateY(" + trachangeX + ")")
	})


})