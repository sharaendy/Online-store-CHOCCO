var openModal = document.getElementById('openButtonModal');
var closeModal = document.getElementById('closeButtonModal');
var overlay = document.querySelector('.overlay');

// Открыть модальное окно
openModal.addEventListener('click', function (e) {
	e.preventDefault();
	overlay.style.display = "flex";
});

// Закрытие окна кнопкой
closeModal.addEventListener('click', function (e) {
	e.preventDefault();
	overlay.style.display = "none";
});

// Закрытие окна оверлей
overlay.addEventListener('click', function (e) {
	e.preventDefault();
	if (e.target == overlay) {
		overlay.style.display = "none";
	};
});