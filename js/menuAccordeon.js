const mesureWidth = () => {
	return 500;
};

const closeEveryItemInContainer = (container) => {
	const items = container.find(".mainMenu__item");
	const content = container.find(".mainMenu__content");

	items.removeClass("active");
	content.width(0);
}

const openItem = (item) => {
	const hiddenContent = item.find(".mainMenu__content");
	const reqWidth = mesureWidth();

	item.addClass("active");
	hiddenContent.width(reqWidth);
};

$(".mainMenu__title").on("click", (e) => {
	e.preventDefault();

	const $this = $(e.currentTarget);
	const item = $this.closest(".mainMenu__item");
	const itemOpened = item.hasClass("active");
	const container = $this.closest(".mainMenu");

	if (itemOpened) {
		closeEveryItemInContainer(container)
	} else {
		closeEveryItemInContainer(container)
		openItem(item);
	}
});


//закрытие меню по кнопке "х"
$(".mainMenu__close").on("click", (e) => {
	e.preventDefault();

	closeEveryItemInContainer($(".mainMenu"));
});