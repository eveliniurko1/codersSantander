var dezenas=[];

function gerarDezenas(){
    for (var i = 0; i < 10; i++){
        dezenas.push(Math.round(Math.random() * 60));
    }
    return dezenas;
}

console.log(gerarDezenas());