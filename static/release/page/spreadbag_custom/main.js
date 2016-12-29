define('page/spreadbag_custom/main.js', function(require, exports, module){ $(window).on('load',function(){
	setTimeout(function(){
		$('.dialogBox').addClass('active');
	},300);
});

$(window).bind('touchmove',function(e){
    e.preventDefault();
}) 
});