// function getAvailableCoursesFoxHollow() {
//     return fetch('https://golf-courses-api.herokuapp.com/courses/18300').then(
//         function (response) {
//             return response.json();
//         }
//     );
// }
// function getAvailableCoursesThanksgiving() {
//     return fetch('https://golf-courses-api.herokuapp.com/courses/11819').then(
//         function (response) {
//             return response.json();
//         }
//     );
// }
// function getAvailableCoursesSpanishOaks() {
//     return fetch('https://golf-courses-api.herokuapp.com/courses/19002').then(
//         function (response) {
//             return response.json();
//         }
//     );
// }
// const foxHollow = getAvailableCoursesFoxHollow();
// const thanksgivingPoint = getAvailableCoursesThanksgiving();
// const spanishOaks = getAvailableCoursesSpanishOaks();

// console.log(foxHollow, thanksgivingPoint, spanishOaks)

window.onload = initializeOnLoad();

let players = {
    1: {
        name: "Player1",
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        total: 0
    }
};

let amOfPlayers = 1;
let nextSetOfCards = false;
let r = document.querySelector(':root')
let rs = getComputedStyle(r);

async function getCourse(id) {

    const url = `https://golf-courses-api.herokuapp.com/courses/${id}`

    return fetch(url).then((response) => response.json())
}

async function initializeOnLoad(id="18300", type = 0) {
    const data = await getCourse(id);
    displayDataToPage(data, type)
}

function displayDataToPage(data, type) {
    console.log(data)
    displayOnYard(data, type);
    displayOnPar(data, type);
    displayOnHCP(data, type);
    displayOnPlayer();
}

function displayOnYard(data, type = 0){
    let yardNum = document.getElementsByClassName('yard');
    let yardTotal = document.getElementById('yard-total')
    let yardTot = 0;
    for (let x = 0; x < 9; x++) {
        let yardsDataNum = data.data.holes[x].teeBoxes[type].yards
        yardTot += yardsDataNum;
        yardNum[x].innerHTML = yardsDataNum;

    }
    yardTotal.innerHTML = `${yardTot}`;
}
function displayOnPar(data, type=0){
    let parNum = document.getElementsByClassName('par');
    let parTotal = document.getElementById('par-total')
    let parTot = 0;
    for (let x = 0; x < 9; x++) {
        let parDataNum = data.data.holes[x].teeBoxes[type].par
        parTot += parDataNum;
        parNum[x].innerHTML = parDataNum;

    }
    parTotal.innerHTML = `${parTot}`;
}
function displayOnHCP(data, type=0){
    let hcpNum = document.getElementsByClassName('handicap');
    let hcpTotal = document.getElementById('hcp-total')
    let hcpTot = 0;
    for (let x = 0; x < 9; x++) {
        let hcpDataNum = data.data.holes[x].teeBoxes[type].hcp
        hcpTot += hcpDataNum;
        hcpNum[x].innerHTML = hcpDataNum;

    }
    hcpTotal.innerHTML = `${hcpTot}`;
}
function displayOnPlayer(){
    let amOfPlayerDivs = document.getElementsByClassName("playerHeader");
    for (let i = 0; i < amOfPlayerDivs.length; i++) {
        let foundByThis = amOfPlayerDivs[i]
        let foundByThisChildren  = foundByThis.children;
        let endOfCard = foundByThisChildren[10]
        let totalScore = 0;
        for (let x = 1; x < foundByThisChildren.length -1; x++) {
            let currentItem = foundByThisChildren[x].children[0];
            let currentVal = currentItem.value;
            totalScore += Number(currentVal);
        }
        endOfCard.innerHTML = `${totalScore}`
    }
}

let nextCard = document.getElementById('nextCard');
let prevCard = document.getElementById('prevCard');

if (nextSetOfCards === false) {
    prevCard.style.display = "None"
    nextCard.style.display = "block"
}
else {
    prevCard.style.display = "block"
    nextCard.style.display = "none"
}

let courseshtml = document.getElementsByClassName('course')

function selectCourse(item) {
    let courseID = item.id
    for (let x = 0; x < courseshtml.length; x++) {
        if (courseshtml[x].classList.contains("active"))
            courseshtml[x].classList.remove('active')
    }
    item.classList.add('active');

    if (courseID == "fox") {
        displayTeeBox(1)
    }
    else if (courseID == "thanks") {
        displayTeeBox(2)
    }
    else if (courseID == "spanish") {
        displayTeeBox(3)
    }
    
}
let teeBoxes = document.getElementById('teeBoxes')
let pro = document.getElementById('pro')
let champ = document.getElementById('champ')
function displayTeeBox(amOfTB) {
    if (amOfTB === 1) {
        teeBoxes.style.left = "38.2vw";
        pro.style.display = "flex";
        champ.style.transition = "0s"
        champ.style.borderRadius = "0";
        teeBoxes.style.display = "block"
    }
    else if (amOfTB === 2) {
        teeBoxes.style.left = "53.8vw";
        champ.style.transition = "0s"
        champ.style.borderRadius = "0";
        pro.style.display = "flex";
        teeBoxes.style.display = "block"
    }
    else if (amOfTB === 3) {
        teeBoxes.style.left = "69.8vw";
        pro.style.display = "none";
        champ.style.transition = "0s"
        champ.style.borderStartStartRadius = "10px";
        champ.style.borderStartEndRadius = "10px";
        teeBoxes.style.display = "block"
    }

}

function selectTee(item){
    let itemIdent = item.id;
    let PlayerDiv = document.getElementsByClassName("players");
    teeBoxes.style.display = "none"
    let parentOf = item.parentElement


    if (itemIdent === "men") {
        r.style.setProperty('--background-color', "#fbfbff")
        r.style.setProperty('--text-color', "#0a0a0a")
        r.style.setProperty('--placeholder-color', "#333D5B")

        if (parentOf.style.left === "38.2vw") {
            initializeOnLoad("18300", 2)
        }
        else if (parentOf.style.left === "53.8vw") {
            initializeOnLoad("11819", 2)
        }
        else if (parentOf.style.left === "69.8vw") {
            initializeOnLoad("19002", 1)
        }
    }
    else if (itemIdent === "women") {
        r.style.setProperty('--background-color', "#F4154D")
        r.style.setProperty('--text-color', "#fbfbff")
        r.style.setProperty('--placeholder-color', "#fbfbff")

        if (parentOf.style.left === "38.2vw") {
            initializeOnLoad("18300", 3)
        }
        else if (parentOf.style.left === "53.8vw") {
            initializeOnLoad("11819", 3)
        }
        else if (parentOf.style.left === "69.8vw") {
            initializeOnLoad("19002", 2)
        }
    }
    else if (itemIdent === "champ") {
        r.style.setProperty('--background-color', "#14BFE1")
        r.style.setProperty('--text-color', "#fbfbff")
        r.style.setProperty('--placeholder-color', "#fbfbff")

        if (parentOf.style.left === "38.2vw") {
            initializeOnLoad("18300", 1)
        }
        else if (parentOf.style.left === "53.8vw") {
            initializeOnLoad("11819", 1)
        }
        else if (parentOf.style.left === "69.8vw") {
            initializeOnLoad("19002", 0)
        }
    }
    else if (itemIdent === "pro") {
        r.style.setProperty('--background-color', "#161A27")
        r.style.setProperty('--text-color', "#fbfbff")
        r.style.setProperty('--placeholder-color', "#D6D6FF")

        if (parentOf.style.left === "38.2vw") {
            initializeOnLoad("18300", 1)
        }
        else if (parentOf.style.left === "53.8vw") {
            initializeOnLoad("11819", 1)
        }
        else if (parentOf.style.left === "69.8vw") {
            initializeOnLoad("19002", 0)
        }
    }
}

let playerLimit = document.getElementById("playerLimit");

function addPlayer(item) {
    if (amOfPlayers === 5) {
        playerLimit.style.opacity = "100"


        setInterval(() => {
            playerLimit.style.transition = "3s"
            playerLimit.style.opacity = "0"
        }, 6000);

        playerLimit.style.transition = "1s"
    }
    else {
        item.parentElement.parentElement.children[amOfPlayers + 1].insertAdjacentHTML("afterend", 
        `<tr id="player${amOfPlayers}" class="playerHeader">
            <th class="playerName${amOfPlayers} players"><input type="text" name="player" id="player" placeholder=". . ."></th>
            <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score1" placeholder=". . ." onchange="displayOnPlayer()"></td>
            <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score2" placeholder=". . ." onchange="displayOnPlayer()"></td>
            <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score3" placeholder=". . ." onchange="displayOnPlayer()"></td>
            <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score4" placeholder=". . ." onchange="displayOnPlayer()"></td>
            <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score5" placeholder=". . ." onchange="displayOnPlayer()"></td>
            <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score6" placeholder=". . ." onchange="displayOnPlayer()"></td>
            <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score7" placeholder=". . ." onchange="displayOnPlayer()"></td>
            <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score8" placeholder=". . ." onchange="displayOnPlayer()"></td>
            <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score9" placeholder=". . ." onchange="displayOnPlayer()"></td>
            <td class="playerSpec" id="play-total${amOfPlayers}"></td>
        </tr>`)
        amOfPlayers += 1
    }

    displayOnPlayer()
}