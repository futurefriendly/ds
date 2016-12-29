define('page/invitation2016/main.js', function(require, exports, module){ var hastouch = 'ontouchstart' in window ,
    tapend = hastouch?'touchend':'click';

function swiperInit(){
    var mySwiper = new Swiper ('.swiper-container', {
        speed: 650,
        followFinger: true,
        resistanceRatio : 0,

        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画

        },
        onSlideChangeStart: function(swiper){
        swiperAnimate(swiper); //每个slide切换开始时也运行当前slide动画
            if($('.e_slide_4').hasClass('swiper-slide-active')){
                $('.fix-container').css({
                    'opacity': 0
                });
            }else{
                $('.fix-container').css({
                    'opacity': 1
                });
            }
        }
    });

    $('.arr_l img').on(tapend,function(){
        mySwiper.slideNext();
    });
    $('.skip').on(tapend,function(){
        mySwiper.slideTo(3);
    });
}

// loading
window.addEventListener('DOMContentLoaded', function() {
    new QueryLoader2(document.querySelector("body"), {
        barColor: "#ff8903",
        backgroundColor: "#fff",
        percentage: true,
        barHeight: 3,
        minimumTime: 500,
        maxTime:1000000,
        fadeOutTime: 900,
        onComplete : function() {
            swiperInit();
        },
    });
}); 
});