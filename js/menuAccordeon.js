const mesureWidth = (item) => {
	let reqItemWidth = 0;
	const screenWidth = $(window).width();
	const container = item.closest(".mainMenu");
	const titlesBlocks = container.find(".mainMenu__title");
	const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

	const textContainer = item.find(".mainMenu__container");
	const paddingLeft = parseInt(textContainer.css("padding-left"));
	const paddingRight = parseInt(textContainer.css("padding-right"));


	const isMobile = window.matchMedia("(max-width: 768px)").matches;

	if (isMobile) {
		reqItemWidth = screenWidth - titlesWidth;
	} else {
		reqItemWidth = 500;
	}

	return {
		container: reqItemWidth,
		textContainer: reqItemWidth - paddingRight - paddingLeft
	}
};

const closeEveryItemInContainer = (container) => {
	const items = container.find(".mainMenu__item");
	const content = container.find(".mainMenu__content");

	items.removeClass("active");
	content.width(0);
}

const openItemTeam = (item) => {
	const hiddenContent = item.find(".mainMenu__content");
	const reqWidth = mesureWidth(item);
	const textBlock = item.find(".mainMenu__container");

	item.addClass("active");
	hiddenContent.width(reqWidth.container);
	textBlock.width(reqWidth.textContainer)
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
		openItemTeam(item);
	}
});


//закрытие меню по кнопке "х"
$(".mainMenu__close").on("click", (e) => {
	e.preventDefault();

	closeEveryItemInContainer($(".mainMenu"));
});