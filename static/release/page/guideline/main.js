define('page/guideline/main.js', function(require, exports, module){ var hastouch = 'ontouchstart' in window ,
    tapend = hastouch?'touchend':'click';

var thisurl = location.hash.replace('#','');

var indexpage = 'about_version';

if(thisurl != ''){
	$('.gl_mod').hide();
	$('#' + thisurl).show();
	for(var i = 0;i<$('.f_load').length;i++){
		if($('.f_load:eq('+i+')').data('href') == thisurl){
			$('.f_load:eq('+i+')').addClass('active');
		}
	}
}else{
	$('#'+indexpage).show();
	location.hash = 'about_version';
	for(var i = 0;i<$('.f_load').length;i++){
		if($('.f_load:eq('+i+')').data('href') == indexpage){
			$('.f_load:eq('+i+')').addClass('active');
		}
	}
}

$('.mod_item').prepend('<div class="mod_tabs">\
	<ul class="clearfix">\
		<li class="item active"><a class="lk f_showdesign" href="javascript:;">Design</a></li>\
		<li class="item"><a class="lk f_showcode" href="javascript:;">Code</a></li>\
	</ul>\
	</div>\
	');

$('.f_showcode').on(tapend,function(){

	var $mod_item = $(this).parents('.mod_item');
	var $code_item = $mod_item.find('.f_code');
	var $design_item = $mod_item.find('.part_ui');
	var code_count = $code_item.length;
	var con = [];

	if(code_count == 0){
		dd.dialog.alert('Sorry，该分类下不包含任何可以查看源代码的模块');
		return false;
	}

	if($mod_item.find('.part_code').length > 0){
		$mod_item.find('.part_code').remove();
	}

	$design_item.hide();
	$mod_item.find('.mod_tabs .item').removeClass('active');
	$(this).parent('.item').addClass('active');

	for( var i=0; i<code_count; i++){

		// 把用户看到的模块的源代码复制一份到数组里
		con[i] = $code_item[i].innerHTML.replace(/\</g,'&lt;').replace(/\>/g,'&gt;').replace(/\	/g,'');

		if($mod_item.find('.part_code').length > 0){
			// 添加一个pre，把数组里的源代码吐到part_code里
			$mod_item.find('.part_code').append('<pre class="highlight">'+con[i]+'</pre>');
		}else{
			// 如果没有part_code，创造一个出来，然后吐进去
			$mod_item.find('.part_ui').after('<div class="part_code"><pre class="highlight">'+con[i]+'</pre></div>');
		}
	}
	// 代码高亮一下
	jQuery.SyntaxHighlighter.init();
});

$('.f_showdesign').on(tapend,function(){

	var $mod_item = $(this).parents('.mod_item');
	var $code_item = $mod_item.find('.f_code');
	var $design_item = $mod_item.find('.part_ui');

	$design_item.show();
	$mod_item.find('.part_code').remove();
	$mod_item.find('.mod_tabs .item').removeClass('active');
	$(this).parent('.item').addClass('active');

});

$('#triggerMenu').on('click',function(){
	$('.gl_side').toggle();
});

$('.f_load').live('click',function(){

	var deviceW = $(window).width();
	thisurl = $(this).data('href');
	location.hash = thisurl;

	if(deviceW<768){
		$('.gl_side').hide();
	}
	$(window).scrollTop(0);
});

$('.ani_timing_opt').live(tapend,function(){
	var timing_obj = $(this).data('css');
	$(this).parents('th').find($('.mod_aniblock')).css({
		'-webkit-transition-timing-function':timing_obj,
		'transition-timing-function':timing_obj
	}).addClass('e_aniblock_act');
	setTimeout(function(){
		$('.mod_aniblock').removeClass('e_aniblock_act');
	},1000);
});

window.onhashchange = function(){
	thisurl = location.hash.replace('#','');
	$('.gl_mod').hide();
	$('#' + thisurl).show();
	$('.f_load').removeClass('active');
	$('[data-href="'+thisurl+'"]').addClass('active').focus();
	$('body').scrollTop(0);
}

function sideToggle(){

	var deviceW = $(window).width();

	if(deviceW>=768){
		$('.gl_side').show();
	}else{
		$('.gl_side').hide();
	}
}

window.onload = function(){
	sideToggle();
	$('[data-href="'+thisurl+'"]').focus();
}
window.onresize = function(){
	sideToggle();
}

// dd
var $btns = $('#dd-demo').find(".f_dd");
$btns.on(tapend,function(){
	var fun = $(this).parents('li').find('pre').text();
	console.log(fun);
	eval(fun);
});

// 快捷键
document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
  switch (e && e.keyCode){
  	case 27 : { // ESC
		$('body').scrollTop(0);
  		location.hash = indexpage;
  	}
  }
};  
});