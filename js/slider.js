// const slider = $(document).ready(function () {
// 	$('.slider').bxSlider({
// 		pager: false,
// 		controls: false
// 	});
// });

const slider = $(".slider").bxSlider({
	pager: false,
	controls: false
});

$(".slider-control__arrow-prew").click(e => {
	e.preventDefault();
	slider.goToPrevSlide();
});

$(".slider-control__arrow-next").click(e => {
	e.preventDefault();
	slider.goToNextSlide();
});