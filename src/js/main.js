import "../style/main.scss";

/** Pages **/
const mainSection = document.querySelector(".main-section");
const subjects = document.querySelector(".subjects-section");
const subjectDetail = document.querySelector(".subject-detail-section");
const settings = document.querySelector(".settings-section");
const navBar = document.querySelector(".nav-bar");
// const graphs = document.querySelector(".main-graphs-widget");
// const calendar = document.querySelector(".main-calendar-widget");

/** Buttons */
// subjectsButton = document.querySelector(".subjects-icon");


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
}


function showSubjectDetailPage(){
    clearAll();
    subjectDetail.classList.toggle("hide");
}


// subjectsButton.addEventListener("click", () => {
//     // showSubjectsPage();
//     alert("Ay");
// });



