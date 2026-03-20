function somar(a, b) {
    return a + b;
}

function cumprimentar(nome) {
    return `Olá, ${nome}!`;
}

const resultado = somar(20, 5);

console.log("Resultado da soma:", resultado);
console.log(cumprimentar("Sirlande"));

const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    }
};

console.log("Calculadora somar:", calculadora.somar(10, 5));
console.log("Calculadora subtrair:", calculadora.subtrair(10, 5));

function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

const resultadoCallback = executarOperacao(8, 3, somar);
console.log("Resultado com callback:", resultadoCallback);

function mostrarMensagem(mensagem) {
    console.log("Mensagem atrasada:", mensagem);
}

setTimeout(function() {
    mostrarMensagem("Olá, Sirlande! Esta mensagem foi exibida após 2 segundos.");
}, 2000);

function operacaoAssincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;
            if (sucesso) {
                resolve("Operação concluída com sucesso!");
            } else {
                reject("Erro na operação");
            }
        }, 1000);
    });
}

operacaoAssincrona()
    .then(resultado => {
        console.log("Promise resolvida:", resultado);
    })
    .catch(erro => {
        console.log("Promise rejeitada:", erro);
    });





