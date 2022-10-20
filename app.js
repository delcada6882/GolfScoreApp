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

let yardNum = document.getElementsByClassName('yard');
let yardTotal = document.getElementById('yard-total')
let yardTot = 0;
console.log(yardNum);
for (let x = 0; x < yardNum.length; x++) {
    yardTot += Number(yardNum[x].innerHTML);
    console.log(yardTot)
}
console.log(yardTot)
yardTotal.innerHTML = `${yardTot}`;

