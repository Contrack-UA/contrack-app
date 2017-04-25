//import secop1 from './secop1.js'; se muere

//var secop = data; //JSON.parse(data);
var secop =[];
var pagina =1;

for(var i=0;i<secop.lenght;i++){
  var contratoActual= secop[i];
  //corupto si
  //estado del proceso: terminado anormalmente
  //Si tiene más de 8 campos en 'No definido' o '' o '0'
  var sospechosidad =0;
  var sospechas=[];
  console.log(" "+i);
  //si tiempo adiciones en meses es mayor a plazo de ejec del contrato * 1.5 rango en M
  var plazoEnMeses =
  contratoActual.rangoDeEjec === "D"?contratoActual.plazoEjecucion/30:
  (contratoActual.rangoDeEjec === "No Definido"?0:contratoActual.plazoEjecucion);
  if(contratoActual.tiempoExtraMeses > 0.5* plazoEnMeses){
    sospechosidad++;
  }
  //si valor total de adiciones es mayor a la mitad de cuantia contrato
  var adiciones = contratoActual.valorAdiciones !== "$-"? contratoActual.valorAdiciones:0;
  if( adiciones > 0.5* contratoActual.cuantiaProceso){
    sospechosidad++;
  }

}
