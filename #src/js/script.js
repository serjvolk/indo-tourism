$(document).ready(function () {

	function ibg(){ // Копируем в свой js файл и не забываем про стили ниже их тоже копируем
		let ibg=document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}
	ibg();

	// Для работы бургер - меню
	$(".header__burger").click(function(){
		$(".header__burger,.header__menu").toggleClass('active');
		$('body').toggleClass('lock');
	});
});