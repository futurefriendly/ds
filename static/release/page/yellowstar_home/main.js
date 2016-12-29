define('page/yellowstar_home/main.js', function(require, exports, module){ // 车主乘客切换
$('.top').on('click',function(){
	$('body').toggleClass('pqs');
	$(window).scrollTop(0);
});

$('.f_back').on('click',function(){
	$('article').css('display','none');
	$('.homepage').css('display','block');
	$('.offenpage').removeClass('offen_a1 offen_a2 offen_x1 offen_x2 offen_m1 offen_auto1 offen_auto2 offen_auto3');
	$(window).scrollTop(0);
	$('.send').removeClass('floatfix');
});

$('.f_offenoq').on('click',function(){
	$('article').css('display','none');
	$('.offenpage').attr('class','offenpage offendate1 offen_auto2 offen_auto3').css('display','block');
});


$('.f_offen').on('click',function(){
	var name = $(this).attr('name');
	var date = $(this).data('date');
	if(name != ''){
		$('.offenpage').addClass('offen_'+name);
	}
	if(date != ''){
		$('.offenpage').removeClass('offendate1 offendate2 offendate3').addClass('offen'+date);
	}
	$('article').css('display','none');
	$('.offenpage').css('display','block');
	$(window).scrollTop(0);
});

// 页面跳转
$('.f_due').on('click',function(){
	var href = $(this).data('href');
	$('article').css('display','none');
	$('.'+href).css('display','block');
	$('.send').removeClass('floatfix');
});

// 首页发布行程卡片跟随
function fixheight(){
	var topheight = $('.top').height() + $('.send').height() - $('.send .float').height();
	return topheight;
}

window.onscroll = function(){
	if($(window).scrollTop() > fixheight()){
		$('.send').addClass('floatfix');
	}else{
		$('.send').removeClass('floatfix');
	}
} 
});