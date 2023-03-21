function enviar() {

    let h2 = document.querySelector('h2');
    var map;

    function success(pos) {
        console.log(pos.coords.latitude, pos.coords.longitude);
        h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;

        if (map === undefined) {
            map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
        } else {
            map.remove();
            map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
        }

        

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
            .bindPopup('Localização do Parceiro')
            .openPopup();


    }

    function error(err) {
        console.log(err)
    }

    var watchID = navigator.geolocation.watchPosition(success, error, {
        enableHighAccuracy: true,
        maximumAge:30000,
        timeout: 10000
    }); 


    
}