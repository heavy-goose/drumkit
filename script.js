let hihatSound = new Audio("assets/hihat.mp3");
let snareSound = new Audio("assets/snare.wav");
let kickSound = new Audio("assets/kick.wav");
let tomSound = new Audio("assets/tom.wav");

const hihat = document.querySelector("#hihat");
const snare = document.querySelector("#snare");
const kick = document.querySelector("#kick");
const tom = document.querySelector("#tom");

// required for wait in the togglePlay function
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function togglePlay (elem) {
    elem.classList.toggle("playing");
    await wait(40);
    elem.classList.toggle("playing");
}

window.addEventListener("keydown", (e) => {
    let key = e.code;
    switch (key) {
        case "KeyA":
            hihatSound.play();
            togglePlay(hihat);
            break;
        case "KeyS":
            snareSound.play();
            togglePlay(snare);
            break;
        case "KeyD":
            kickSound.play();
            togglePlay(kick);
            break;
        case "KeyF":
            tomSound.play();
            togglePlay(tom);
            break;
        default:
            break;
    }
})

