$(document).ready(function() {
  console.log("dibujando mapa");
    var pozoSelecionado = undefined;
    var mapaPozos = [];
    var sensor = {
        _id: 0,
        avgTemp: 20,
        avgPh: 8,
        avgSalt: 4,
        lat: 6.544560,
        lon: -78.019409,
        lastTemp: 40,
        lastPh: 8,
        lastSal: 4
    };
    var msg = [sensor];
    var convert = [];
    console.log(msg);
    for (var i = 0; i < msg.length; i++) {
      mapaPozos[msg[i]._id] = msg[i];
        var color = undefined;
        if (msg[i].lastTemp > 30) {
            color = "green";
        } else if (msg[i].lastTemp === 30) {
            color = "red";
        } else if (msg[i].lastTemp === 30) {
            color = "black";
        }
        var n = {
            latLng: [
                msg[i].lat, msg[i].lon
            ],
            name: msg[i]._id,
            style: {
                fill: color
            }
        };
        convert.push(n);
    }
    console.log(convert);

    $('#colombia-map').vectorMap({
        map: 'co_mill',
        backgroundColor: "transparent",
        regionStyle: {
            initial: {
                fill: '#7D7D7D',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 0
            }
        },
        markers: convert,
        onMarkerClick: function(event, index) {
          console.log("undio click");
            pozoSelecionado = map.params.main.markers[index].name;
            var pozo = mapaPozos[pozoSelecionado];
            //hasta aqui funciona perfecto
            $('#infoPozo').text("pozo: " + pozoSelecionado);
            $("#ener").text(pozo.lastPh);
            $("#temp").text(pozo.lastTemp);
            $("#barr").text(pozo.lastSal);
            console.log(pozoSelecionado);
        },
        markerStyle: {
            initial: {
                fill: '#F8E23B',
                stroke: '#383f47'
            }
        }
    });
});
