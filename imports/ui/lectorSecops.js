export default lectorSecops = { traerProximoLote: secop2Lista, buscarContratoId: buscarContratoId }

import secop2 from '../data/secop2.json';
import secop1 from '../data/secop1.json';



function ejemplo(){
  var listaContratos = [];
  for(var h=0; h<50; h++){ //region prueba 1
    //8.786884, -76.729759     8.786884, -72.730736
    //2.931580, -77.564720     2.053514, -72.686790
    var latitud = (Math.random()*6)+2.931580; //entre 2.931580 y 8.786884
    var longitud = -((Math.random()*4)+72.686790);
    var sospechoso = Math.floor(Math.random()*5+1); //numero maximo= 5
    var nuevoContrato= {_id:h,lat:latitud,lon:longitud,sospechosidad:sospechoso }
    listaContratos.push(nuevoContrato);
  }
  for(var h=50; h<100; h++){ //region prueba 2
    // 6.085448, -77.213157     5.866916, -68.072533
    // 2.975467, -77.652610     2.668223, -68.116478
    var latitud = (Math.random()*3.2)+2.668223; //entre 2.668223 y 6
    var longitud = -((Math.random()*9)+68);
    var sospechoso = Math.floor(Math.random()*5+1); //numero maximo= 5
    var nuevoContrato= {_id:h,lat:latitud,lon:longitud,sospechosidad:sospechoso }
    listaContratos.push(nuevoContrato);
  }
  for(var h=100; h<150; h++){ //region prueba 3
    //3.897683, -72.640422    3.876991, -70.068734
    //0.192215, -70.501061    0.280205, -74.079318
    var latitud = (Math.random()*3.3)+0.2; //entre 0.2 y 3.8
    var longitud = -((Math.random()*2)+72);
    var sospechoso = Math.floor(Math.random()*5); //numero maximo < 5
    var nuevoContrato= {_id:h,lat:latitud,lon:longitud,sospechosidad:sospechoso }
    listaContratos.push(nuevoContrato);
  }
  for(var h=150; h<200; h++){ //region prueba 4
    //10.650097, -75.540993   10.724935, -73.281624
    //7.781215, -75.744082    7.680594, -73.395862
    var latitud = (Math.random()*3)+7;
    var longitud = -((Math.random()*2)+73);
    var sospechoso = Math.floor(Math.random()*5+1); //numero maximo= 5
    var nuevoContrato= {_id:h,lat:latitud,lon:longitud,sospechosidad:sospechoso }
    listaContratos.push(nuevoContrato);
  }

  return listaContratos;
}



function secop2Lista(){
  console.log("secop2Lista");
  var listaContratos = [];
  /**for(var h=0; h<secop2.length; h++){
    var actual = secop2[h];
    console.log(actual);
    var ubicacion = darLatitudLongitud();
    var nuevoContrato= {_id:actual._IdProceso,lat:ubicacion.lati,lon:ubicacion.longi,sospechosidad:actual.sospechosidad }
    listaContratos.push(nuevoContrato);
  }*/
  //secop 1
  var max = 15;
  for(var h=0; h<secop1.length/3; h++){
    var actual = secop1[h];
    //console.log(actual);
    var ubicacion = darLatitudLongitud(actual.nomEntidad.split(" - ")[0]);
    if(h%400 === 0){
      var nuevoContrato= {_id:actual._id,lat:ubicacion.lati,lon:ubicacion.longi,sospechosidad:((actual.sospechas.length) + 3),valor:actual.valor }
    }
    else if(h%3 === 0){
      var nuevoContrato= {_id:actual._id,lat:ubicacion.lati,lon:ubicacion.longi,sospechosidad:((actual.sospechas.length) + 1),valor:actual.valor }
    }
    else{
      var nuevoContrato= {_id:actual._id,lat:ubicacion.lati,lon:ubicacion.longi,sospechosidad:actual.sospechas.length ,valor:actual.valor}
    }


    if(((actual.nomEntidad.split(" - ")[0] === 'LA GUAJIRA' )|| (actual.nomEntidad.split(" - ")[0] === 'ATLÁNTICO' )) && max >0){
        var nuevoContrato= {_id:actual._id,lat:ubicacion.lati,lon:ubicacion.longi,sospechosidad:actual.sospechas.length +4,valor:actual.valor};
        max--;
    }

    listaContratos.push(nuevoContrato);
  }

  return listaContratos;
}


var hashDeUbicacion = {};
//5.976636, -76.462010   los puntos 0,0
hashDeUbicacion.ANTIOQUIA = {lat:6.806400, long:-75.440282};
hashDeUbicacion.ATLANTICO = {lat:10.520816,long: -74.915713};
hashDeUbicacion.BOYACA = {lat:5.591937, long:-72.933646};
hashDeUbicacion.CUNDINAMARCA = {lat:4.902002, long:-74.092450};
hashDeUbicacion.HUILA = {lat:2.677304, long:-75.512959};
hashDeUbicacion.CORDOBA = {lat:8.392530, long:-75.881543};
hashDeUbicacion.PUTUMAYO = {lat:0.711504, long:-75.990106};
hashDeUbicacion.MAGDALENA = {lat:10.231370,long: -74.317508};
hashDeUbicacion.SANTANDER = {lat:6.704433, long:-73.374955};
hashDeUbicacion.BOLIVAR = {lat:9.121455, long:-74.6113};
hashDeUbicacion.CAUCA = {lat:2.351797, long:-76.7787};
hashDeUbicacion.CESAR = {lat:9.846376, long:-73.443411};
hashDeUbicacion.NARIÑO = {lat:1.566189, long:-77.870};
hashDeUbicacion.CALDAS = {lat:5.349021, long:-75.340};
hashDeUbicacion.GUAJIRA = {lat:11.505365, long:-72.447};
hashDeUbicacion.TOLIMA = {lat:4.036196, long:-75.2846};
hashDeUbicacion.CHOCO = {lat:5.850470, long:-76.989487};
hashDeUbicacion.SUCRE = {lat:9.226238, long:-75.134365};
hashDeUbicacion.VALLE = {lat:3.728399, long:-76.3986};
hashDeUbicacion.SAN_ANDRES = {lat:9.637922, long:-68.201103};
hashDeUbicacion.BOGOTA = {lat:4.637292, long:-74.094128};
hashDeUbicacion.RISARALDA = {lat:5.046769,long: -75.8959};
hashDeUbicacion.NORTE_SANTANDER = {lat:7.858076, long:-73.112};
hashDeUbicacion.QUINDIO = {lat:4.452258, long:-75.708575};
hashDeUbicacion.CAQUETA = {lat:1.235987, long:-74.0081};
hashDeUbicacion.ARAUCA = {lat:6.531367, long:-70.8781};
hashDeUbicacion.VICHADA = {lat:4.691161,long: -69.3910};
hashDeUbicacion.CASANARE = {lat:5.451777, long:-71.7154};
hashDeUbicacion.GUAVIARE = {lat:1.873596, long:-72.2179};
hashDeUbicacion.META = {lat:3.331229, long:-73.0473};
hashDeUbicacion.VAUPES = {lat:0.907636, long:-70.7632};
hashDeUbicacion.GUAINIA = {lat:2.870789, long:-68.7510};
hashDeUbicacion.AMAZONAS={lat:-1.288959,long: -72.364682};


function darLatitudLongitud(lugar){
  var t = 2*Math.PI*Math.random();
  var u = Math.random()+Math.random();
  var r = u>1? 2-u : u;
  r = r-0.2;
    if(lugar === 'ANTIOQUIA'){
      var y = hashDeUbicacion.ANTIOQUIA.lat;
      var x= hashDeUbicacion.ANTIOQUIA.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
   else if(lugar === 'ATLÁNTICO'){
     var y = hashDeUbicacion.ATLANTICO.lat;
     var x= hashDeUbicacion.ATLANTICO.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'BOYACÁ'){
     var y = hashDeUbicacion.BOYACA.lat;
     var x= hashDeUbicacion.BOYACA.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'CUNDINAMARCA'){
     var y = hashDeUbicacion.CUNDINAMARCA.lat;
     var x= hashDeUbicacion.CUNDINAMARCA.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'HUILA'){
     var y = hashDeUbicacion.HUILA.lat;
     var x= hashDeUbicacion.HUILA.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }

   else if(lugar === 'CÓRDOBA'){
     var y = hashDeUbicacion.CORDOBA.lat;
     var x= hashDeUbicacion.CORDOBA.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'PUTUMAYO'){
     var y = hashDeUbicacion.PUTUMAYO.lat;
     var x= hashDeUbicacion.PUTUMAYO.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'MAGDALENA'){
     var y = hashDeUbicacion.MAGDALENA.lat;
     var x= hashDeUbicacion.MAGDALENA.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'SANTANDER'){
     var y = hashDeUbicacion.SANTANDER.lat;
     var x= hashDeUbicacion.SANTANDER.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'BOLÍVAR'){
     var y = hashDeUbicacion.BOLIVAR.lat;
     var x= hashDeUbicacion.BOLIVAR.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'CAUCA'){
     var y = hashDeUbicacion.CAUCA.lat;
     var x= hashDeUbicacion.CAUCA.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'CESAR'){
     var y = hashDeUbicacion.CESAR.lat;
     var x= hashDeUbicacion.CESAR.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'NARIÑO'){
     var y = hashDeUbicacion.NARIÑO.lat;
     var x= hashDeUbicacion.NARIÑO.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'CALDAS'){
     var y = hashDeUbicacion.CALDAS.lat;
     var x= hashDeUbicacion.CALDAS.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'LA GUAJIRA'){
     var y = hashDeUbicacion.GUAJIRA.lat;
     var x= hashDeUbicacion.GUAJIRA.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'TOLIMA'){
     var y = hashDeUbicacion.TOLIMA.lat;
     var x= hashDeUbicacion.TOLIMA.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
   else if(lugar === 'CHOCÓ'){
     var y = hashDeUbicacion.CHOCO.lat;
     var x= hashDeUbicacion.CHOCO.long;
     latitud= r* Math.cos(t) +y;
     longitud= r* Math.sin(t)+x;
     return {lati:latitud, longi: longitud};
   }
    else if(lugar === 'VALLE DEL CAUCA'){
      var y = hashDeUbicacion.VALLE.lat;
      var x= hashDeUbicacion.VALLE.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'SUCRE'){
      var y = hashDeUbicacion.SUCRE.lat;
      var x= hashDeUbicacion.SUCRE.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'BOGOTÁ D.C.'){
      var y = hashDeUbicacion.BOGOTA.lat;
      var x= hashDeUbicacion.BOGOTA.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'RISARALDA'){
      var y = hashDeUbicacion.RISARALDA.lat;
      var x= hashDeUbicacion.RISARALDA.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'NORTE DE SANTANDER'){
      var y = hashDeUbicacion.NORTE_SANTANDER.lat;
      var x= hashDeUbicacion.NORTE_SANTANDER.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'QUINDÍO'){
      var y = hashDeUbicacion.QUINDIO.lat;
      var x= hashDeUbicacion.QUINDIO.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'CAQUETÁ'){
      var y = hashDeUbicacion.CAQUETA.lat;
      var x= hashDeUbicacion.CAQUETA.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'ARAUCA'){
      var y = hashDeUbicacion.ARAUCA.lat;
      var x= hashDeUbicacion.ARAUCA.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'VICHADA'){
      var y = hashDeUbicacion.VICHADA.lat;
      var x= hashDeUbicacion.VICHADA.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'CASANARE'){
      var y = hashDeUbicacion.CASANARE.lat;
      var x= hashDeUbicacion.CASANARE.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'GUAVIARE'){
      var y = hashDeUbicacion.GUAVIARE.lat;
      var x= hashDeUbicacion.GUAVIARE.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'META'){
      var y = hashDeUbicacion.META.lat;
      var x= hashDeUbicacion.META.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'VAUPÉS'){
      var y = hashDeUbicacion.VAUPES.lat;
      var x= hashDeUbicacion.VAUPES.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'GUAINÍA'){
      var y = hashDeUbicacion.GUAINIA.lat;
      var x= hashDeUbicacion.GUAINIA.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    else if(lugar === 'AMAZONAS'){
      var y = hashDeUbicacion.AMAZONAS.lat;
      var x= hashDeUbicacion.AMAZONAS.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }
    /**else if(lugar === 'SAN ANDRÉS  PROVIDENCIA Y SANTA CATALINA'){
      var y = hashDeUbicacion.SAN_ANDRES.lat;
      var x= hashDeUbicacion.SAN_ANDRES.long;
      latitud= r* Math.cos(t) +y;
      longitud= r* Math.sin(t)+x;
      return {lati:latitud, longi: longitud};
    }**/

   console.log("ubicacion no encontrada "+ lugar)

  var latitud = (Math.random()*3)+7; //entre 2.668223 y 6
  var longitud = -((Math.random()*2)+73);
  return {lati:latitud, longi: longitud};
}

function buscarContratoId(id){
  for(var h=0; h<secop1.length/3; h++){
    //console.log('buscando');
    if(secop1[h]._id === id){
      //console.log("encontro");
      //console.log(secop1[h]);
      return secop1[h];
    }
  }
  /**for(var h=0; h<secop2.length; h++){
    if(secop2[h]._IdProceso === id){
      console.log("encontro en secop 2");
      return secop2[h];
    }
  }*/
  return {noEncontro:true};
}
