//header固定在顶部窗口事件==================================
$(window).scroll(function(){
	headerInit();
})
function headerInit(){
	if($(this).scrollTop()>0){
		$("body").addClass("fiexed-header");
	}else{
		$("body").removeClass("fiexed-header");
	}
}

//刚刷新时也判断一遍
headerInit();

//header固定在顶部窗口事件结束=============================


//首页事件================================================
var images = ['img/bg-image-2_.jpg','img/bg-image-2.jpg','img/bg-image-1_.jpg','img/bg-image-1.jpg']
$(".index").backstretch(images, {
                fade: 750,
                duration: 4000,
                preload: 0,
                start: 2
            });

//首页结束================================================

//关于事件================================================
//	滚动监听
$('body').scrollspy({ target: '#mynav' })
//	滚动监听结束

// 文字特效
if($("[data-animated]").length>0){
$("[data-animated]").each(function(index, el) {
    var $this = $(this);
    var animationEffect = $this.attr["data-animated"];
    setTimeout(function(){
      $this.removeClass("animated-no").addClass("animated-off");
      $this.addClass('animated '+ animationEffect);
    },500);
});
}

//平滑效果
$(".navbar a").click(function(){
	var target = $(this.hash);	//获取点击获取的锚点 例如#index #about
	$("html").animate({
		scrollTop:target.offset().top,	//添加距离顶部的高,1秒完成
	},1000)
});
//关于结束================================================

//图集===================================================
$(".filter li a").click(function(){
	var faild = $(this).attr('data-filter');
	$('.isotope-container').isotope({ filter: faild });
	
	$(this).parent().addClass('active').siblings().removeClass('active');
	return false;
});
//图集结束===============================================