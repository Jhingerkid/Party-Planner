import { createOrderMenu } from "../CreateMenu/createOrderMenu.js";
import { display } from "../nav.js";
//wow
export async function gatherMenuData() {
	var restaurantList = [];
	let url = "https://api.documenu.com/v2/restaurants/zip_code/83843?fullmenu=true";
	const request = await fetch(url, {
		method: "GET",
		headers: { "x-api-key": "39c3b2215c250e6368b87bd16adfdb4a" },
	});
	const response = await request.json();
	// create an array of objects, where each object represents a location that exists in the desired zipcode
	let menuData = response.data;
	// take the array of retrieved objects, and gather the locations we want by matching strings
	menuData.forEach((element) => {
		if (element.restaurant_name === "Moscow Alehouse") {
			window.moscowAlehouse = element;
			restaurantList.push(window.moscowAlehouse);
		}
		if (element.restaurant_name === "Maialina Pizzeria Napoletana") {
			window.maialina = element;
			restaurantList.push(window.maialina);
		}
		if (element.restaurant_name === "Sangria Grill") {
			window.sangriaGrill = element;
			restaurantList.push(window.sangriaGrill);
		}
	});
	document.querySelector(".main-content-box").firstElementChild.remove();
	let parent = document.querySelector(".main-content-box");
	let tempBox = document.createElement("div");
	tempBox.classList.add("main-page");
	parent.appendChild(tempBox);
	createMenuItem(restaurantList);
}

function createMenuItem (restaurantList) {
    restaurantList.forEach(restaurant => {
        // declare the elements that will make up each restaurant
        let restaurantItem = document.createElement("div");
		let restaurantIcon = document.createElement("img");
        let restaurantOrder = document.createElement("button");
        // give each element a class
        restaurantItem.classList.add("restaurant-item");
		restaurantIcon.classList.add("restaurant-img");
        restaurantOrder.classList.add("restaurant-order");
        // populate the innerhtml for each element
        restaurantOrder.innerHTML = "Order from " + restaurant.restaurant_name;
		// add the icon to the restaurant
		let name = restaurant.restaurant_name.replace(/\s/g, ''); // remove spaces from name string
		let src = "images/" + name + "-logo.png";
		restaurantIcon.src = src;
		restaurantIcon.alt = restaurant.restaurant_name
        // add an event listener to the order button
        restaurantOrder.addEventListener("click", function () {
			createOrderMenu(restaurant);
           // display(document.querySelector("#restaurant-menu"));
        });
        // append element to div
        restaurantItem.append(restaurantIcon, restaurantOrder);
        // append the new div
        document.querySelector(".main-page").append(restaurantItem);
    });
  }
