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

function randonComputer() {
    let randomNumber = Math.floor(Math.random() * 5);
    return (randomNumber);
}
function choicePlayer() {
    displayNoneMenuList ();
    const path = "src/assets/img/";
    
    
    for (i = 5; i > 0; i--) {
        const imgElement = document.createElement("img");
        imgElement.id = i;
        imgElement.classList.add ("mao");
        imgElement.src = path + i + ".png";
        imgElement.alt = "";
        state.views.menu.appendChild(imgElement);
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
        btnElement.setAttribute("onclick", "choise('"+nome[i]+"')");
        state.views.nav.appendChild(btnElement.cloneNode(true));
    }
}

function choise(choise){
    const opcaoComputer = randonComputer();
    const opcaoPlayer = choicePlayer();

    const win = (opcaoComputer+opcaoPlayer)%2;
    state.actions.countDownTimeId = setInterval(this.countDown.bind(this), 1000);
}

function displayNoneMenuList (){
    for (let i = 0; i < state.views.menuList.length; i++) {
        state.views.menuList[i].style.display = "none";
    }
}

function init() {
    displayNoneMenuList ();
    imparPar();
}
