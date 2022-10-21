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


async function getCourse(id) {

    const url = `https://golf-courses-api.herokuapp.com/courses/${id}`

    return fetch(url).then((response) => response.json())
}

async function initializeOnLoad(id="18300") {
    const data = await getCourse(id);
    displayDataToPage(data)
}

function displayDataToPage(data) {
    console.log(data)
    displayOnYard(data);
    displayOnPar(data);
    displayOnHCP(data);
    displayOnPlayer();
}

function displayOnYard(data){
    let yardNum = document.getElementsByClassName('yard');
    let yardTotal = document.getElementById('yard-total')
    let yardTot = 0;
    for (let x = 0; x < 9; x++) {
        let yardsDataNum = data.data.holes[x].teeBoxes[0].yards
        yardTot += yardsDataNum;
        yardNum[x].innerHTML = yardsDataNum;

    }
    yardTotal.innerHTML = `${yardTot}`;
}
function displayOnPar(data){
    let parNum = document.getElementsByClassName('par');
    let parTotal = document.getElementById('par-total')
    let parTot = 0;
    for (let x = 0; x < 9; x++) {
        let parDataNum = data.data.holes[x].teeBoxes[0].par
        parTot += parDataNum;
        parNum[x].innerHTML = parDataNum;

    }
    parTotal.innerHTML = `${parTot}`;
}
function displayOnHCP(data){
    let hcpNum = document.getElementsByClassName('handicap');
    let hcpTotal = document.getElementById('hcp-total')
    let hcpTot = 0;
    for (let x = 0; x < 9; x++) {
        let hcpDataNum = data.data.holes[x].teeBoxes[0].hcp
        hcpTot += hcpDataNum;
        hcpNum[x].innerHTML = hcpDataNum;

    }
    hcpTotal.innerHTML = `${hcpTot}`;
}
function displayOnPlayer(){
    let playNum = document.getElementsByClassName('playInp');
    let playTotal = document.getElementById('play-total')
    let playTot = 0;
    for (let x = 0; x < 9; x++) {
        let playDataNum = Number(playNum[x].value);
        console.log(playDataNum)
        playTot += playDataNum;
        playNum[x].innerHTML = playDataNum;

    }
    playTotal.innerHTML = `${playTot}`;
}

window.onload = initializeOnLoad();


let courseshtml = document.getElementsByClassName('course')

function selectCourse(item) {
    let courseID = item.id
    for (let x = 0; x < courseshtml.length; x++) {
        if (courseshtml[x].classList.contains("active"))
            courseshtml[x].classList.remove('active')
    }
    item.classList.add('active');

    if (courseID == "fox") {
        initializeOnLoad("18300")
    }
    else if (courseID == "thanks") {
        initializeOnLoad("11819")
    }
    else if (courseID == "spanish") {
        initializeOnLoad("19002")
    }
    
}