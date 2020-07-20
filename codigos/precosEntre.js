function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
 }
  
 function maisCarosQue(valor, precos){
    return precos.filter(p => p >= valor);
 }
 
 function precosEntre(valorMenor, valorMaior, precos){
    var acimaMinimoValor =  maisCarosQue(valorMenor, precos);
    var abaixoMaximoValor = maisBaratosQue(valorMaior,precos)
    var j =0, precosFinais =0, total;
    for (var i =0; i < precos.length; i++){
        if( precos[i] < valorMaior && precos[i] > valorMenor){

            console.log(precosFinais)
        }
    }




   
 }
 var precosEntreIntervalo = precosEntre(100,200, [50,80,102,199,250])
 console.log(precosEntreIntervalo)