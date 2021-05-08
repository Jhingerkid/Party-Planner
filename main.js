import { gatherMenuData } from "./API/gatherMenuData.js";
import { createTotalModal } from "./Modal/createModal.js";

document.querySelector("#clickme").addEventListener("click", function(){
    gatherMenuData();
});

document.querySelector(".sidebar-button").addEventListener("click", function (){
    createTotalModal();
});