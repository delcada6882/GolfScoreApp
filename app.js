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
        name: "",
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

let outsideID = "18300"
let amOfPlayers = 1;
let nextSetOfCards = false;
let r = document.querySelector(':root')
let rs = getComputedStyle(r);

let oneToNine = document.getElementById('oneToNine')
let nineToEighteen = document.getElementById('nineToEighteen')

async function getCourse(id) {

    const url = `https://golf-courses-api.herokuapp.com/courses/${id}`

    return fetch(url).then((response) => response.json())
}

async function initializeOnLoad(id="18300", type = 0) {
    const data = await getCourse(id);
    displayDataToPage(data, type)
}

async function initializeOnLoadTwo(id="18300", type = 0) {
    const data = await getCourse(id);
    displayDataToPageTwo(data, type)
}

function displayDataToPage(data, type) {
    displayOnYard(data, type);
    displayOnPar(data, type);
    displayOnHCP(data, type);
    displayOnPlayer();
}

function displayDataToPageTwo(data, type) {
    displayOnYardTwo(data, type)
    displayOnParTwo(data, type)
    displayOnHCPTwo(data, type)
    displayOnPlayerTwo();
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

function displayOnYardTwo(data, type = 0){
    let yardNumTwo = document.getElementsByClassName('yardTwo');
    let yardTotalTwo = document.getElementById('yard-in');
    let yardTotalTotal = document.getElementById('yard-total-total');
    let yardTotTwo = 0;
    for (let x = 0; x < 9; x++) {
        let yardsDataNumTwo = data.data.holes[x+9].teeBoxes[type].yards
        yardTotTwo += yardsDataNumTwo;
        yardNumTwo[x].innerHTML = yardsDataNumTwo;
    }
    let yardFinalTotal = 0;
    for (let j = 0; j < 18; j++) {
        let findTotalYards = data.data.holes[j].teeBoxes[type].yards
        yardFinalTotal += findTotalYards
    }
    yardTotalTwo.innerHTML = `${yardTotTwo}`;
    yardTotalTotal.innerHTML = `${yardFinalTotal}`
}



function displayOnParTwo(data, type=0){
    let parNumTwo = document.getElementsByClassName('parTwo');
    let parTotalTwo = document.getElementById('par-in')
    let parTotalTotal = document.getElementById('par-total-total');
    let parTotTwo = 0;
    for (let x = 0; x < 9; x++) {
        let parDataNumTwo = data.data.holes[x + 9].teeBoxes[type].par
        parTotTwo += parDataNumTwo;
        parNumTwo[x].innerHTML = parDataNumTwo;
    }
    let parFinalTotal = 0;
    for (let j = 0; j < 18; j++) {
        let findTotalPar = data.data.holes[j].teeBoxes[type].par
        parFinalTotal += findTotalPar
    }
    parTotalTwo.innerHTML = `${parTotTwo}`;
    parTotalTotal.innerHTML = `${parFinalTotal}`
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

function displayOnHCPTwo(data, type=0){
    let hcpNumTwo = document.getElementsByClassName('handicapTwo');
    let hcpTotalTwo = document.getElementById('handicap-in')
    let hcpTotalTotal = document.getElementById('hcp-total-total');
    let hcpTotTwo = 0;
    for (let x = 0; x < 9; x++) {
        let hcpDataNumTwo = data.data.holes[x+9].teeBoxes[type].hcp
        hcpTotTwo += hcpDataNumTwo;
        hcpNumTwo[x].innerHTML = hcpDataNumTwo;
    }
    let hcpFinalTotal = 0;
    for (let j = 0; j < 18; j++) {
        let findTotalHcp = data.data.holes[j].teeBoxes[type].hcp
        hcpFinalTotal += findTotalHcp
    }
    hcpTotalTwo.innerHTML = `${hcpTotTwo}`;
    hcpTotalTotal.innerHTML = `${hcpFinalTotal}`
}



function displayOnPlayer(){
    let amOfPlayerDivs = document.getElementsByClassName("playerHeader");
    for (let i = 0; i < amOfPlayerDivs.length; i++) {
        if (players[i+1].name !== "") {
            let playerNameItem = document.getElementsByClassName(`playerName${i+1}`)
            let playerNameDisplay = playerNameItem[0].children[0]

            playerNameDisplay.value = players[i+1].name;
        }
        let foundByThis = amOfPlayerDivs[i]
        let foundByThisChildren  = foundByThis.children;
        let endOfCard = foundByThisChildren[10]
        let totalScore = 0;
        for (let x = 1; x < foundByThisChildren.length - 1; x++) {
            let currentItem = foundByThisChildren[x].children[0];
            let currentVal = currentItem.value;
            if (currentVal === "") {
                players[i+1][x] = 0
            }
            else {
                players[i+1][x] = Number(currentVal);
            }
            totalScore += Number(currentVal);
            players[i+1].total = totalScore
        }
        endOfCard.innerHTML = `${totalScore}`
    }
}


function displayOnPlayerTwo(){
    let amOfPlayerDivs = document.getElementsByClassName("playerHeaderTwo");
    for (let i = 0; i < amOfPlayerDivs.length; i++) {
        if (players[i+1].name !== "") {
            let playerNameItem = document.getElementsByClassName(`playerName${i+1}`)
            let playerNameDisplay = playerNameItem[1].children[0]

            playerNameDisplay.value = players[i+1].name;
        }
        let foundByThis = amOfPlayerDivs[i]
        let foundByThisChildren  = foundByThis.children;
        let endOfCard = foundByThisChildren[10]
        let endOfEndOfCard = foundByThisChildren[11]
        let totalScore = 0;
        for (let x = 1; x < foundByThisChildren.length - 2; x++) {
            let currentItem = foundByThisChildren[x].children[0];
            let currentVal = currentItem.value;
            if (currentVal === "") {
                players[i+1][x+9] = 0
            }
            else {
                players[i+1][x+9] = Number(currentVal);
            }
            totalScore += Number(currentVal);
            players[i+1].total = totalScore
        }
        let totalTotalScore = 0
        for (let j = 1; j < 19; j++) {
            totalTotalScore += players[i+1][j]
        }
        endOfEndOfCard.innerHTML = `${totalTotalScore}`
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

function closeSelectTee() {
    teeBoxes.style.display = "none"
}

function selectTee(item){
    let itemIdent = item.id;
    teeBoxes.style.display = "none"
    let parentOf = item.parentElement


    if (itemIdent === "men") {
        r.style.setProperty('--background-color', "#fbfbff")
        r.style.setProperty('--text-color', "#0a0a0a")
        r.style.setProperty('--placeholder-color', "#333D5B")

        if (parentOf.style.left === "38.2vw") {
            outsideID = "18300"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 2)
            }
            else {
                initializeOnLoad(outsideID, 2)
            }
        }
        else if (parentOf.style.left === "53.8vw") {
            outsideID = "11819"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 2);
            }
            else {
                initializeOnLoad(outsideID, 2)
            }
        }
        else if (parentOf.style.left === "69.8vw") {
            outsideID = "19002"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 1);
            }
            else {
                initializeOnLoad(outsideID, 1)
            }
        }
    }
    else if (itemIdent === "women") {
        r.style.setProperty('--background-color', "#F4154D")
        r.style.setProperty('--text-color', "#fbfbff")
        r.style.setProperty('--placeholder-color', "#fbfbff")

        if (parentOf.style.left === "38.2vw") {
            outsideID = "18300"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 3)
            }
            else {
                initializeOnLoad(outsideID, 3)
            }
        }
        else if (parentOf.style.left === "53.8vw") {
            outsideID = "11819"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 3)
            }
            else {
                initializeOnLoad(outsideID, 3)
            }
        }
        else if (parentOf.style.left === "69.8vw") {
            outsideID = "19002"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 2)
            }
            else {
                initializeOnLoad(outsideID, 2)
            }
        }
    }
    else if (itemIdent === "champ") {
        r.style.setProperty('--background-color', "#12AFCE")
        r.style.setProperty('--text-color', "#fbfbff")
        r.style.setProperty('--placeholder-color', "#fbfbff")

        if (parentOf.style.left === "38.2vw") {
            outsideID = "18300"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 1)
            }
            else {
                initializeOnLoad(outsideID, 1)
            }
        }
        else if (parentOf.style.left === "53.8vw") {
            outsideID = "11819"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 1)
            }
            else {
                initializeOnLoad(outsideID, 1)
            }
        }
        else if (parentOf.style.left === "69.8vw") {
            outsideID = "19002"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 1)
            }
            else {
                initializeOnLoad(outsideID, 1)
            }
        }
    }
    else if (itemIdent === "pro") {
        r.style.setProperty('--background-color', "#161A27")
        r.style.setProperty('--text-color', "#fbfbff")
        r.style.setProperty('--placeholder-color', "#D6D6FF")

        if (parentOf.style.left === "38.2vw") {
            outsideID = "18300"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 1)
            }
            else {
                initializeOnLoad(outsideID, 1)
            }
        }
        else if (parentOf.style.left === "53.8vw") {
            outsideID = "11819"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 1)
            }
            else {
                initializeOnLoad(outsideID, 1)
            }
        }
        else if (parentOf.style.left === "69.8vw") {
            outsideID = "19002"
            if (nextSetOfCards === true) {
                initializeOnLoadTwo(outsideID, 0)
            }
            else {
                initializeOnLoad(outsideID, 0)
            }
        }
    }
}

let playerLimit = document.getElementById("playerLimit");

function addPlayer(item) {
    if (amOfPlayers === 5) {
        playerLimit.style.opacity = "100"


        setTimeout(() => {
            playerLimit.style.transition = "3s"
            playerLimit.style.opacity = "0"
        }, 2000);

        playerLimit.style.transition = "0.2s"
    }
    else {
        if (item.id === "newPlay") {
            amOfPlayers += 1
            item.parentElement.parentElement.children[amOfPlayers + 1].insertAdjacentHTML("afterend", 
            `<tr id="player${amOfPlayers}" class="playerHeader">
                <th class="playerName${amOfPlayers} players ${amOfPlayers}"><input type="text" name="player" id="player" placeholder=". . ." onchange="newPlayerName(this)"></th>
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
    
    
            item.parentElement.parentElement.parentElement.parentElement.children[4].children[1].children[amOfPlayers + 1].insertAdjacentHTML("afterend", 
            `<tr id="player${amOfPlayers}" class="playerHeaderTwo">
                <th class="playerName${amOfPlayers} players ${amOfPlayers}"><input type="text" name="player" id="player" placeholder=". . ." onchange="newPlayerName(this)"></th>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score1" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score2" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score3" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score4" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score5" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score6" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score7" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score8" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score9" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="playerSpec players" id="play-total${amOfPlayers}-in"></td>
                <td class="playerSpec players" id="play-total${amOfPlayers}-total"></td>
            </tr>`)
        }
        else {
            amOfPlayers += 1
            item.parentElement.parentElement.children[amOfPlayers + 1].insertAdjacentHTML("afterend", 
            `<tr id="player${amOfPlayers}" class="playerHeaderTwo secondOption">
                <th class="playerName${amOfPlayers} players ${amOfPlayers}"><input type="text" name="player" id="player" placeholder=". . ." onchange="newPlayerName(this)"></th>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score1" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score2" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score3" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score4" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score5" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score6" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score7" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score8" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="player${amOfPlayers} players"><input type="number" class="playInp${amOfPlayers}" name="score" id="score9" placeholder=". . ." onchange="displayOnPlayerTwo()"></td>
                <td class="playerSpec players" id="play-total${amOfPlayers}-in"></td>
                <td class="playerSpec players" id="play-total${amOfPlayers}-total"></td>
            </tr>`)
    
    
            item.parentElement.parentElement.parentElement.parentElement.children[3].children[1].children[amOfPlayers + 1].insertAdjacentHTML("afterend", 
            `<tr id="player${amOfPlayers}" class="playerHeader">
                <th class="playerName${amOfPlayers} players ${amOfPlayers}"><input type="text" name="player" id="player" placeholder=". . ." onchange="newPlayerName(this)"></th>
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
        }

        let newItem = {
            name: ``,
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
        players[Object.keys(players).length + 1] = newItem;
    }
    if (nextSetOfCards === true) {
        displayOnPlayerTwo()
    }
    else {
        displayOnPlayer()
    }
}
function newPlayerName(item) {
    let newName = item.value;
    let classItem = item.parentElement.classList[2];
    players[classItem].name = newName
}

function nextCardFunc() {
    prevCard.style.display = "block"
    nextCard.style.display = "none"
    nextSetOfCards = true;
    oneToNine.style.display = "none"
    nineToEighteen.style.display = "block"
    initializeOnLoadTwo(outsideID)
}

function prevCardFunc() {
    prevCard.style.display = "none"
    nextCard.style.display = "block"
    nextSetOfCards = false;
    oneToNine.style.display = "block"
    nineToEighteen.style.display = "none"
    initializeOnLoad(outsideID)
}