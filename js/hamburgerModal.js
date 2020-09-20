var openModalHamburger = document.getElementById('openButtonHamburger');
var closeModalHamburger = document.getElementById('closeButtonHamburger');
var overlayHamburger = document.querySelector('.hamburger-overlay');

// Открыть модальное окно
openModalHamburger.addEventListener('click', function (e) {
	e.preventDefault();
	overlayHamburger.style.display = "flex";
});

// Закрытие окна кнопкой
closeModalHamburger.addEventListener('click', function (e) {
	e.preventDefault();
	overlayHamburger.style.display = "none";
});

// Закрытие окна оверлей кликом по области
overlayHamburger.addEventListener('click', function (e) {
	e.preventDefault();
	if (e.target == overlayHamburger) {
		overlayHamburger.style.display = "none";
	};
});