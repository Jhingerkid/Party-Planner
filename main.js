import { gatherMenuData } from "./API/gatherMenuData.js";
import { display } from "./nav.js";

document.querySelector("#clickme").addEventListener("click", function () {
  gatherMenuData();
});

// instead:
document.querySelector("#clickme").addEventListener("click", function () {
  let [backButton, nextButton] = display(gatherMenuData());
});
