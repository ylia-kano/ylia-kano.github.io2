function initMap() {
	var element = document.getElementById('map');
	var options = {
		zoom: 17,
		center: {lat: 59.9388231, lng: 30.3226649}
		};
	var myMap = new google.maps.Map(element, options);
	var markers = [
		{
		coordinates: {lat: 59.9388231, lng: 30.3226649}
		}
	];
	for(var i = 0; i < markers.length; i++) {
		addMarker(markers[i]);
	}
	function addMarker(properties) {
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: myMap,
			icon: 'img/map-pin.png'
			});
	}
}