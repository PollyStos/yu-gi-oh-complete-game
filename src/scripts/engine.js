const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_box"),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        player: document.getElementById("computer-field-card"),
    },
    button: document.getElementById("next-duel"),
};

function contadorDecrescente(valor, callback) {
    if (valor > 0) {
        console.log(valor);
        valor--;
        setTimeout(function () {
            contadorDecrescente(valor, callback);
        }, 1000); // Intervalo de 1 segundo (1000 milissegundos)
    } else {
        callback();

        valor = 15;

        contadorDecrescente(valor, callback);
    }
}



function init() {
    contadorDecrescente(15, function () {
        console.log("Contador chegou a zero. Disparar nova função aqui.");
    });
}
