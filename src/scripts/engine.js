const state = {
    views: {
        pointComputer: document.getElementById("point-computer"),
        pointPlayer: document.getElementById("point-player"),
        clock: document.querySelector(".clock"),
        blur: document.querySelector(".blur"),
        menu: document.querySelector(".menu"),
        buttonMenu: document.querySelectorAll(".menu-list"),
        turn: document.getElementById("turn"),
        menuList: "",
        nav: document.querySelector(".nav"),
    },
    path: {
        mao: "src/assets/img/",
    },
    values: {
        imgMComputer: document.createElement("img"),
        numComputer: 0,
        numPlayer: 0,
        playerChoise:"",
        win:"",
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

function displayNoneMenuList() {
    state.views.menuList = document.querySelectorAll(".menu-list");
    for (let i = 0; i < state.views.menuList.length; i++) {
        state.views.menuList[i].style.display = "none";
    }
}

function changeTurn() {
    console.log("me chamou")
    if (state.views.turn.textContent == "Computer") {
        state.views.turn.textContent = "Player";
    } else {
        state.views.turn.textContent = "Computer";
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

function win() {
    let res="";
    if ((state.values.numComputer + state.values.numPlayer) % 2 === 0) {
        res = "Par";
    }else{
        res = "Impar";
    }

    if(res===state.values.playerChoise){
        state.values.win = "Player Win";
    }else{
        state.values.win = "Computer Win";
    }

    console.log(state.values.win);

    state.actions.countDownTimeId = setInterval(this.countDown.bind(this), 1000);
}

function randonComputer() {
    state.values.numComputer = Math.floor(Math.random() * 5);
}

function criarMao() {
    state.values.imgMComputer.src = state.path.mao + state.values.numComputer + ".png";
    state.values.imgMComputer.classList.add("mao");
}

function imgMaoComputer() {
    while (state.values.numComputer === 0) {
        randonComputer();
    }

    const divComputer = document.createElement("div");
    divComputer.classList.add("btn-img");
    divComputer.classList.add("zoomed2");

    state.views.nav.appendChild(divComputer);
    criarMao();
    divComputer.appendChild(state.values.imgMComputer);
    win();
}

function choiseNumber(num) {
    for (let i = 1; i <= 5; i++) {
        const btnImg = document.querySelector(".num" + i);
        if (i === num) {
            state.values.numPlayer = num;
            btnImg.classList.add("zoomed");
            imgMaoComputer();
        } else {
            btnImg.style.display = "none";
        }
    }
}

function choicePlayer() {
    displayNoneMenuList();
    const divImgElement = document.createElement("div");
    divImgElement.classList.add("img-mao");
    divImgElement.style.display = "flex";
    divImgElement.style.flexDirection = "row-reverse";
    state.views.menu.appendChild(divImgElement);

    for (i = 5; i > 0; i--) {
        const btnImgElement = document.createElement("button");
        btnImgElement.classList.add("btn-img");
        btnImgElement.classList.add("num" + i);
        btnImgElement.setAttribute("onclick", "choiseNumber(" + i + ")");

        const imgElement = document.createElement("img");
        divImgElement.appendChild(btnImgElement);
        imgElement.id = i;
        imgElement.classList.add("mao");
        imgElement.src = state.path.mao + i + ".png";
        imgElement.alt = "";
        btnImgElement.appendChild(imgElement);
    }
}

function imparPar() {
    const btnElement = document.createElement("button");
    const name = ["Par", "Impar"];

    for (i = 0; i < name.length; i++) {
        btnElement.textContent = name[i];
        btnElement.classList.add("menu-list");
        btnElement.classList.add("black");
        btnElement.setAttribute("onclick", "choiseParImpar('" + name[i] + "')");
        state.views.nav.appendChild(btnElement.cloneNode(true));
    }
}

function choiseParImpar(name) {
    state.values.playerChoise = name;
    randonComputer();
    choicePlayer();
}

function init() {
    displayNoneMenuList();
    imparPar();
}
