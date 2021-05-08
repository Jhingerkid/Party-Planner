import { gatherMenuData } from "./API/gatherMenuData.js";
import { display } from "./nav.js";

// console.log(document.querySelector("#main-page"));

display(document.querySelector("#main-page"));

document.querySelector("#clickme").addEventListener("click", async function () {
  gatherMenuData();
});
