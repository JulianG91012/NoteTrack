//console.log("Hola mundo desde parcel")
import { saludar } from "./modulos.js";
import '../style/main.scss';


const mainSection = document.getElementById("main-section");
const header = document.getElementById("presentation-banner");
const graphs = document.getElementById("main-graphs-widget");

window.onload = function () {
    
    setTimeout(() => {
        toggleAllSections();
    }, 5000);
}


function toggleAllSections() {
    mainSection.classList.toggle("hide");
    header.classList.toggle("hide");
    graphs.classList.toggle("hide");
}



header.addEventListener("click", () => {
    toggleAllSections();
    //header.classList.add("hidden");
});
