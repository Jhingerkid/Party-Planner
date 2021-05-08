import { gatherMenuData } from "./API/gatherMenuData.js";
import { display } from "./nav.js";
import { createTotalModal } from "./Modal/createModal.js";

// console.log(document.querySelector("#main-page"));

display(document.querySelector("#main-page"));

document.querySelector("#clickme").addEventListener("click", async function () {
	gatherMenuData();
});
document.querySelector(".sidebar-button").addEventListener("click", function () {
	createTotalModal();
});
