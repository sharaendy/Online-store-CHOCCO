let myMap;

const init = () => {
	myMap = new ymaps.Map("ymap", {
		center: [56.474246, 84.978852],
		zoom: 13,
		controls: ['zoomControl']
	});

	const coords = [
		[56.456289, 84.950362],
		[56.478665, 85.007378],
		[56.503364, 84.949373],
		[56.482150, 84.966738]
	]

	const myCollection = new ymaps.GeoObjectCollection({}, {
		draggable: false,
		iconLayout: 'default#image',
		iconImageHref: './img/5_map/marker.png',
		iconImageSize: [46, 57],
		iconImageOffset: [-35, -52]
	});

	coords.forEach(coord => {
		myCollection.add(new ymaps.Placemark(coord));
	});

	myMap.geoObjects.add(myCollection);

	myMap.behaviors.disable('scrollZoom');

}

ymaps.ready(init);