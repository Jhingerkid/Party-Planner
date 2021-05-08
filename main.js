import { gatherMenuData } from "./API/gatherMenuData.js";
import { display } from "./nav.js";
import { createTotalModal } from "./Modal/createModal.js";

display(document.querySelector("#main-page"));

document.querySelector(".restaurantOrder").addEventListener("click", async function () {
	display("#restaurant-menu");
});

// I would like to be able to use display(gatherMenuData());
document.querySelector("#clickme").addEventListener("click", async function () {
	gatherMenuData("#restaurant-menu");
});
// overlay
document.querySelector(".sidebar-button").addEventListener("click", function () {
	createTotalModal();
});
