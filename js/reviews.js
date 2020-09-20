const findBlock = alias => {
	return $('.review__item').filter((ndx, item) => {
		return $(item).attr("data-linked-with") == alias
	})
}

$(".review-selector__link").click((e) => {
	e.preventDefault();

	const $this = $(e.currentTarget);
	const target = $this.attr("data-open");
	const itemToShow = findBlock(target);
	const currentItem = $this.closest(".review-selector__item");

	itemToShow.addClass("active").siblings().removeClass("active");
	currentItem.addClass("active").siblings().removeClass("active");
});