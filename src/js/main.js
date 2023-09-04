//console.log("Hola mundo desde parcel")
import { saludar } from "./modulos.js";
import "../style/main.scss";

const mainSection = document.querySelector(".main-section");
const graphs = document.querySelector(".main-graphs-widget");
const calendar = document.querySelector(".main-calendar-widget");
const subjects = document.querySelector(".subjects-section");
const subjectDetail = document.querySelector(".subject-detail-section");
const settings = document.querySelector(".settings-section");

// toggleAllSections();

window.onload = function () {
    startPage();  
};

function startPage() {
    // toggleAllSections();
    console.log("1");
    setTimeout(toggleAllSections, 1000);
}

function toggleAllSections() {
    mainSection.classList.toggle("hide");
    settings.classList.toggle("hide");
    graphs.classList.toggle("hide");
    calendar.classList.toggle("hide");
    subjects.classList.toggle("hide");
    subjectDetail.classList.toggle("hide");
    settings.classList.toggle("hide");
}

specialButton.addEventListener("click", () => {
    toggleAllSections();
    //header.classList.add("hidden");
});
