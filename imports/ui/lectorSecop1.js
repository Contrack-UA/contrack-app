export default lectorSecop1 = { traerProximoLote: ejemplo }



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
    var latitud = (Math.random()*3)+7; //entre 2.668223 y 6
    var longitud = -((Math.random()*2)+73);
    var sospechoso = Math.floor(Math.random()*5+1); //numero maximo= 5
    var nuevoContrato= {_id:h,lat:latitud,lon:longitud,sospechosidad:sospechoso }
    listaContratos.push(nuevoContrato);
  }

  return listaContratos;
}
