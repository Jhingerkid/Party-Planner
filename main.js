import { gatherMenuData } from "./API/gatherMenuData.js";
import { createTotalModal } from "./Modal/createModal.js";
import { display } from "./nav.js";

// example data that may be passed to the modal
export var exampleData;
display(document.querySelector("#main-page"));

let orderButtons = await gatherMenuData();
// let orderButtons = document.querySelectorAll(".restaurant-order");
// orderButtons.forEach((button) => {
// 	button.addEventListener("click", function (event) {
// 		console.log(event.target); // use me to display differnet shop menus
// 		display(document.querySelector("#restaurant-menu"));
// 	});
// });

// I would like to be able to use display(gatherMenuData());
document.querySelector("#clickme").addEventListener("click", async function () {
	gatherMenuData();
});
// overlay
document.querySelector(".sidebar-button").addEventListener("click", function () {
	createTotalModal(exampleData);
});