//   - cuadrado(n)        → n * n
//   - cubo(n)            → n * n * n
//   - esPar(n)           → true/false

module.exports = { cuadrado, cubo, esPar };

function cuadrado(n){
    let resultado = n * n;
    console.log('El numero "' + n + '" al cuadrado es:' );
    console.log(resultado);
    console.log("------------------------");
};

function cubo(n){
    let resultado = n * n * n;
    console.log('El numero "' + n + '" al cubo es:' );
    console.log(resultado);
    console.log("------------------------");
};

function esPar(n){
    if (n % 2 === 0){
        console.log("El numero '" + n + "' es par");
        console.log("------------------------");
        return n;
    } else {
        console.log("Es numero '" + n + "' es impar");
        console.log("------------------------");
        return n;
    };
};
