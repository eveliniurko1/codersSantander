var resultado = [];

function maxmin(a, b, c, d, e){
    resultado.push(Math.min(a, b, c, d, e));
    resultado.push(Math.max(a, b, c, d, e));
    return resultado;
}

console.log(maxmin(1,2,3,4,5));