define('page/pd_demo/main.js', function(require, exports, module){ 
var DidiMonitor = require('didimonitor');
var DidiBridge = require('didibridge');
var _page = DidiMonitor.getQuery('page');

if(_page != ''){
	$('#'+_page).css('display','block');
}else{
	$('#menu').css('display','block');
}

$('.pd_select').on('click',function(){
	location.href = location.href + '?page=' + $(this).data('href');
}); 
});