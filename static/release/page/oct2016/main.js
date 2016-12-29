define('page/oct2016/main.js', function(require, exports, module){ window.onload = function(){
	setTimeout(function(){
		// active, '','';
		$('.scene').removeClass('active');
		$('.scene1').addClass('active');
	},500);
	setTimeout(function(){
		// done, active, '';
		$('.scene').removeClass('active');
		$('.scene1').addClass('done');
		$('.scene2').addClass('active');
	},4500);
	setTimeout(function(){
		// done, done, active;
		$('.scene').removeClass('active');
		$('.scene1').remove();
		$('.scene2').addClass('done');
		$('.scene3').addClass('active');
	},8500);
	setTimeout(function(){
		// done, done, done
		$('.scene').removeClass('active');
		$('.scene2,.ani_skip').remove();
		$('.scene3').addClass('done');
	},12500);
	setTimeout(function(){
		$('.scene3').remove();
	},16500);

} 
});