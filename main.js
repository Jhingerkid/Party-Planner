import { gatherMenuData } from "./API/gatherMenuData.js";

document.querySelector("#clickme").addEventListener("click", function(){
    gatherMenuData();
});