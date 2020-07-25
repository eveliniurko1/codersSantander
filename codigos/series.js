/**
 Programe uma função series que recebe dois parâmetros, um prefixo com o nome da série e um array 
 com a lista de todos os episódios da série. A função deve retornar um novo array com a lista de episódios iniciando com o nome da série.
 */

function series(prefixo, array){

    let resultado=[];

    for(i = 0; i < array.length - 1; i++){
        resultado.push(`${prefixo} ${array[i]}`);
    }

    return resultado;
}

const prefixo = "Harry Potter";
const array = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];

console.log(series(prefixo, array));