define('page/startrek2016/main.js', function(require, exports, module){ var hastouch = 'ontouchstart' in window ,
    tapend = hastouch?'touchend':'click';

setText();

function setText(){

	var winw = $(window).width();
	var wtimes = 1;
	if(winw > 768){
		wtimes = 2;
	}else{
		if(winw <= 320){
			wtimes = 0.853;
		}else{
			wtimes = winw / 375;
		}
	}
	var wfont = Math.floor(16 * wtimes) + 'px';
	$('html').css('font-size',wfont);

}
window.onresize = setText;

$('.page').on(tapend,function(){
	var order = $('.active').index() - 3;
	$('.page').removeClass('active');
	$('.page:eq('+order+')').addClass('active');
});

// loading
window.addEventListener('DOMContentLoaded', function() {
    new QueryLoader2(document.querySelector("body"), {
        barColor: "#ff8903",
        backgroundColor: "#fff",
        percentage: true,
        barHeight: 3,
        minimumTime: 1000,
        maxTime:1000000,
        fadeOutTime: 900,
        onComplete : function() {
			$('.page0').addClass('active');
			autoPlay();
        },
    });
});

// music

$('#music_tool').on(tapend,function(){
	switchMusic();
});

function switchMusic(){
    var mts = document.getElementById('music_tool_switch'),
        mt = document.getElementById('music_tool'),
        ma = document.getElementById('music_audio');
    if(ma!==null){
        if(mts.checked == true && ma.paused){
            mts.checked = false;
            ma.play();
        }else{
            mts.checked = true;
            ma.pause();
        } 
    }
};  

//音乐自动播放
function autoPlay() {
    document.getElementById('music_audio').play();
    $("body").off("touchstart");
};

//浏览器不自动播放fix
$("body").on("touchstart", autoPlay); 
});