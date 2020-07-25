/**
 Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema. 
A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o 
tamanho de um dos arrays fornecidos e retornar uma frase com o seguinte modelo: 
"personagem é um personagem do filme filme que estreou no cinema em lançamento." 
Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida."
 */

function filme(personagens, filmes, lancamentos, id)
{
    if(id > personagens.length){
        console.log('Essa não é uma opção válida.');
        return;
    }
    console.log(` ${personagens[id]}  é um personagem do filme ${filmes[id]} que estreou no cinema em ${lancamentos[id]}`);
    return;

}

var personagens = ["Hermione", "Trinity", "Leia"];
var filmes = ["Harry Potter", "Matrix", "Star wars"];
var lancamentos = [2001, 1999, 1977];
var id = 2;//id que usuario coloca -1 por array comecar do 0

filme(personagens, filmes, lancamentos, id);