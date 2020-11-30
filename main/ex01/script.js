"use strict"; // JavaScript fica mais chatinho

// var = escopo abrangente
// let = escopo reduzido

function withVar() {
    for (var i = 0; i <= 10; i++) {
        console.log(`var ${i}`);
    }

    i = 20;
    console.log(i);
}

withVar();

function withLet() {
    for (let i = 0; i <= 10; i++) {
        console.log(`let ${i}`);
    }

    // i = 20; // Retorna um erro pois "i" não está definido neste escopo
    // console.log(i);
}

// const = Você não pode reatribuir valores para a mesma!
const any = null;
// any = 0; // retorna um erro
