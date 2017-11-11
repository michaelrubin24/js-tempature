
var tempature = +prompt("Введите температуру в цельсиях:");

function tempature_toKelvin(tempature){
  var KELVIN_TEMPATURE = 273.15;
  tempature += KELVIN_TEMPATURE;
  return tempature;
}

function tempature_toFarengeit(tempature){
  var FARENGEIT = 32;
  var coefficient = 1.8;
  var cels_to_farengeit = tempature * 1.8 + FARENGEIT;
  return cels_to_farengeit;
}

function result(tempature){
 var output;
 if(isNaN(tempature) || tempature == ""){
  output = alert("Неправильный ввод");
  return output;
 }else{
   output = alert("Это:" + "\n" + tempature_toFarengeit(tempature) + " в фаренгейтах" + "\n" + tempature_toKelvin(tempature) + " в кельвинах");
   return output;
      }
}

result(tempature);
