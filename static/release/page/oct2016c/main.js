define('page/oct2016c/main.js', function(require, exports, module){ var hastouch = 'ontouchstart' in window ,
    tapend = hastouch?'touchend':'click';
var time_scene = [];

// 点击跳过
$('.ani_skip').on(tapend,function(){
	$('.stage,.ani_skip').remove();
	for(var i=0;i<time_scene.length;i++){
		clearTimeout(time_scene[i]);
	}
	$('.scene').removeClass('active').addClass('done');
	$('.oct_animate .aninner').css('overflow','visible');
	sceneMap();
});

// 舞台进入
time_scene[0] = setTimeout(function(){

	$('.scene').addClass('active');
},100);

// 第1个场景进入
time_scene[1] = setTimeout(function(){

	$('.scene').attr('class','scene scene1start active');
	$('.ani_skip').css('display','block');
},500);

// 第2个场景进入，第1个场景退出
time_scene[2] = setTimeout(function(){

	$('.scene').attr('class','scene scene1end scene2start active');
},4500);

// 第3个场景进入，第2个场景退出
time_scene[3] = setTimeout(function(){
	
	$('.scene').attr('class','scene scene2end scene3start active');
},8500);

// 第3个场景退出
time_scene[4] = setTimeout(function(){
	
	$('.stage1,.stage2').remove();
	$('.scene').attr('class','scene scene3end active');
},12500);

// 舞台退出
time_scene[5] = setTimeout(function(){
	
	$('.stage3,.ani_skip').remove();
	$('.scene').removeClass('active').addClass('done');
	$('.oct_animate .aninner').css('overflow','visible');
	sceneMap();
},13700);

// 地图进入
function sceneMap(){
	dd.dialog.alert('地图出现');
} 
});