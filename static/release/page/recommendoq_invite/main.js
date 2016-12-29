define('page/recommendoq_invite/main.js', function(require, exports, module){ setText();

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
});