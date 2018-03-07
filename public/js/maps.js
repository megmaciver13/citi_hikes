
function initMap () {
  var directionsService = new google.maps.DirectionsService()
  var directionsDisplay = new google.maps.DirectionsRenderer()
//   var haight = new google.maps.LatLng(37.7699298, -122.4469157)
//   var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205)
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(38.9014847, -77.0391641)
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions)
  directionsDisplay.setMap(map)
  var selectedMode = 'DRIVING'
  var request = {
    origin: 'Washington, DC',
    destination: 'Old Rag Mountain',
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
    travelMode: google.maps.TravelMode[selectedMode]
  }
  directionsService.route(request, function (response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response)
    }
  })
}
