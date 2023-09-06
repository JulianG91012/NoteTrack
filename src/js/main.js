import "../style/main.scss";

/** Pages **/
const mainSection = document.querySelector(".main-section");
const subjects = document.querySelector(".subjects-section");
const subjectDetail = document.querySelector(".subject-detail-section");
const settings = document.querySelector(".settings-section");
const navBar = document.querySelector(".nav-bar");
// const graphs = document.querySelector(".main-graphs-widget");
// const calendar = document.querySelector(".main-calendar-widget");

/** Icons*/
const subjectsIcon = document.querySelector(".subjects-icon");
const homeIcon = document.querySelector(".home-icon");
const settingsIcon = document.querySelector(".settings-icon");

/** Buttons */
const subjectButton = document.querySelector(".subjects-button");
const homeButton = document.querySelector(".home-button");
const firstSubject = document.querySelector(".first-subject");

window.onload = function () {
    // showSplash();
    startPage();  
};


// function showSplash(){
//     clearAll();
//     setTimeout(()=>{
//         showMainPage();
//     });
// }


function startPage() {
    showMainPage();
}


function clearAll() {
    navBar.classList.add("hide");
    mainSection.classList.add("hide"); 
    subjects.classList.add("hide"); 
    subjectDetail.classList.add("hide");
    settings.classList.add("hide");
    // graphs.classList.toggle("hide");
    // calendar.classList.toggle("hide");
}


function showMainPage(){
    clearAll();
    mainSection.classList.toggle("hide");
    navBar.classList.toggle("hide");
}


function showSubjectsPage(){
    clearAll();
    subjects.classList.toggle("hide");
    navBar.classList.toggle("hide");
}


// function showSubjectDetailPage(){
//     clearAll();
//     subjectDetail.classList.toggle("hide");
// }


function showFirstSubject(){
    clearAll();
    subjectDetail.classList.toggle("hide");
    navBar.classList.toggle("hide");
}


function showSettingsPage(){
    clearAll();
    settings.classList.toggle("hide");
    navBar.classList.toggle("hide");
}

subjectsIcon.addEventListener("click", () => {
    showSubjectsPage();
    //TODO Hover style for the subjectsIcon
});

firstSubject.addEventListener("click", () => {
    showFirstSubject();
});

homeIcon.addEventListener("click", () => {
    showMainPage();
});

homeButton.addEventListener("click", () => {
    showMainPage();
});

subjectButton.addEventListener("click", () => {
    //TODO: Fix the Redundancy between buttons
    showSubjectsPage();
});

settingsIcon.addEventListener("click", ()=>{
    showSettingsPage();
});



