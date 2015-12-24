/*
	proscom.ru
	Simple Communication

	ilko.me
	Ilya Komichev
*/

$(document).ready(function(){

	// placeholder for IE9
	$('input, textarea').placeholder();


	// autoresize textarea
	autosize($('textarea.autosize'));


	// paralax
	var s = skrollr.init({
		forceHeight: false,
	});
	/*
	if(s.isMobile()){
		s.destroy()
	}

	//	run functions on resize
	//	use timer to make resize correct
	// ===============================================
	var timer;
	$(window).on("resize", function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			var windowWidth = $(window).width();
			if(windowWidth < 1025) {
				s.destroy()
			} else {
				s = skrollr.init()
			}
		}, 200);
	});*/

});