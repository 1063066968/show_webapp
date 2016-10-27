(function() {

    var docEl = document.documentElement;
    var resizeEvt = 'orientation' in window ? 'orientationchange' : 'resize';

    // 在手机端有window.orientation属性,当前设备的屏幕方向，0表示竖屏，正负90表示横屏（向左与向右）模式
    var recalc = function() {
            var clientWidth = docEl.clientWidth;

            if (!clientWidth) return;
            //20 ，是scss 定义的变量 就是计算rem的基准
            // 640 是设计图的宽度。
            docEl.style.fontSize = 20 * clientWidth / 640 + 'px';
    };

    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);

    //dom 节点加载完成后就会执行回调函数 DOMContentLoaded
    //(img 图片 ，script加载完后 ， dom节点创建完 css，)window.onload  
    document.addEventListener('DOMContentLoaded', recalc, false);
})();

$(function(){
	var tabsSwiper = new Swiper('#tabs-container',{
	    onSlideChangeStart: function(){
	      $(".tabs .active").removeClass('active')
	      $(".tabs li").eq(tabsSwiper.activeIndex).addClass('active')  
	    }
  	})
  	$(".tabs li").on('touchstart mousedown',function(e){
	    e.preventDefault()
	    $(".tabs .active").removeClass('active')
	    $(this).addClass('active')
	    tabsSwiper.slideTo( $(this).index() )
  	})
	$(".tabs li").click(function(e){
	    e.preventDefault()
	})
  
  
  	var lunboswiper = new Swiper('.lunbo',{
    	pagination: '.lunbo_fenye',
        paginationClickable: true,
        autoplay: 1000,
        loop:true,
        autoplayDisableOnInteraction: false
    });
    
    $(".list_tit").on("click",function () {
       $(".list_cont").toggle();
   })
  
})
  