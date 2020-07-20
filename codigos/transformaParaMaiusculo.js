var  i =0;
var a, array =[];

function transformarParaMaiusculo(palavras){
    for (i = 0; i < palavras.length; i++ ){
         a = palavras[i].toUpperCase();
         array.push(a);
         //console.log(array);
    }
    return array;
}
var palavras = ['gato','cachorro','tartaruga'];
var resultado = transformarParaMaiusculo(palavras);
console.log(resultado);