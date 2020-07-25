/**
 Programe uma função maiorQueNum que busca em um dado array 
apenas os números maiores do que o número fornecido no segundo parâmetro da função e retorne um novo array apenas com esses números.
function maiorQueNum(array, num){

    let resultado=[];

        for( i = 0; i < array.length; i++){
            if(array[i] > num){
                resultado.push(array[i]);
            }
        }

        return resultado;
}

const array = [10, 4, 7, 128, 42, -1, 0, 300, -5];
const num = 10;

console.log(maiorQueNum(array, num));