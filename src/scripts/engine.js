const state = {
    views: {
        pointComputer: document.getElementById("point-computer"),
        pointPlayer: document.getElementById("point-player"),
        clock: document.querySelector(".clock"),
        blur: document.querySelector(".blur"),
        menu: document.querySelector(".menu"),
        buttonMenu: document.querySelectorAll(".menu-list"),
        turn: document.getElementById("turn"),
        menuList: document.querySelectorAll(".menu-list"),
        nav:document.querySelector(".nav"),
    },
    values: {
        computerScore: 0,
        playerScore: 0,
        time: 15,
    },
    cardSprites: {

    },
    fieldCards: {
    }, actions: {
        countDownTimeId: null,
    },
};

function changeTurn() {
    console.log("me chamou")
    if (state.views.turn.textContent == "Computer") {
        state.views.turn.textContent = "Player";
        console.log("troquei para player");
    } else {
        state.views.turn.textContent = "Computer";
        console.log("troquei para computer");
    }
    state.values.time = 16;
}

function countDown() {
    state.values.time--;
    state.views.clock.textContent = state.values.time + "s";
    if (state.values.time === 0) {
        changeTurn();
    }
}

function closedMenu() {
    state.views.blur.style.display = "none";
}

function openMenu() {
    state.views.blur.style.display = "flex";

    for (i = 0; i < state.views.buttonMenu.length; i++) {
        if (state.views.buttonMenu[i].classList.contains("grey")) {
            state.views.buttonMenu[i].classList.remove("grey");
            state.views.buttonMenu[i].classList.add("black");
        }
    }
}

function randonComputer() {
    let randomNumber = Math.floor(Math.random() * 5);
    return (randomNumber);
}
function choicePlayer() {
    const imgElement = document.createElement("img");
    const path = "src/assets/img/"
    for (i = 5; i > 0; i--) {
        imgElement.src = path + i + ".png";
        imgElement.alt = "";
        state.views.menu.appendChild(imgElement);
        console.log(imgElement.src);
    }

    let result = 1;
    return (result);
}

function imparPar() {
    const btnElement = document.createElement("button");
    const nome= ["Par","Impar"];
    for (i = 0; i < nome.length; i++) {
        btnElement.textContent = nome[i];
        btnElement.classList.add("menu-list");
        btnElement.classList.add("black");
        state.views.nav.appendChild(btnElement.cloneNode(true));
    }
    // const numberComputer = randonComputer();
    // console.log(numberComputer);
    // const numberPlayer = choicePlayer();

    // const result = (numberComputer + numberPlayer) % 2;

    return win ="par";
}

function init() {
    for (let i = 0; i < state.views.menuList.length; i++) {
        state.views.menuList[i].style.display = "none";
    }
    const win = imparPar();
    // closedMenu(win);
    state.actions.countDownTimeId = setInterval(this.countDown.bind(this), 1000);

}
