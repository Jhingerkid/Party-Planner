import { exampleData } from "../main.js";
import { display } from "../nav.js";

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
	// console.log(menuData); // the initial array of data that is retrieved
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
	let homePageTemplate = document.createElement("template");
	homePageTemplate.setAttribute("id", "main-page");

	document.body.appendChild(homePageTemplate);

	let orderButtons = createMenuItem(restaurantList);
	return orderButtons;
}

function createMenuItem(restaurantList) {
	// console.log(restaurantList);
	let arrayOfInputsForObjectifying = []; // move to each restaurant order maker
	restaurantList.forEach((restaurant, restaurantIndex) => {
		// console.log(restaurant);
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
		let name = restaurant.restaurant_name.replace(/\s/g, ""); // remove spaces from name string
		let src = "images/" + name + "-logo.png";
		restaurantIcon.src = src;
		restaurantIcon.alt = restaurant.restaurant_name;

		// append element to div
		restaurantItem.append(restaurantIcon, restaurantOrder);
		// append the new div to body
		document.body.querySelector("#main-page").append(restaurantItem);
		//a variable to store any ordered items

		let specificRestaurant = document.createElement("template");
		// arrayOfInputsForObjectifying.append([]);
		specificRestaurant.setAttribute("id", `${restaurant.restaurant_name}-restaurant-id`);
		specificRestaurant.setAttribute("name", "restaurant-menu");

		restaurantList[restaurantIndex].menus.forEach((menuList, menuListIndex) => {
			// console.log(menuList);
			restaurantList[restaurantIndex].menus[menuListIndex].menu_sections.forEach((menuSection, menuSectionIndex) => {
				// console.log(menuSection);
				//get variable equal to the pertinent menu heading sections
				let sectionTitle = restaurantList[restaurantIndex].menus[menuListIndex].menu_sections[menuSectionIndex].section_name;

				//Make the menu headings that will contain the appropriate menu items
				let menuSubSection = document.createElement("div");
				let menuSubSectionTitle = document.createElement("h1");
				let addForm = document.createElement("form");

				menuSubSectionTitle.innerHTML = sectionTitle;
				menuSubSection.append(menuSubSectionTitle);

				//Now we go grab all the individual menu items to populate our menu sections with
				restaurantList[restaurantIndex].menus[menuListIndex].menu_sections[menuSectionIndex].menu_items.forEach((menuItem, menuItemIndex) => {
					//get variables equal to the pertinent menu item values
					let dishName = restaurantList[restaurantIndex].menus[menuListIndex].menu_sections[menuSectionIndex].menu_items[menuItemIndex].name;
					let dishDesc = restaurantList[restaurantIndex].menus[menuListIndex].menu_sections[menuSectionIndex].menu_items[menuItemIndex].description;
					let dishPrice = restaurantList[restaurantIndex].menus[menuListIndex].menu_sections[menuSectionIndex].menu_items[menuItemIndex].price;
					dishPrice = dishPrice.toFixed(2); //Making sure there are fluff zeros where needed so it looks nice in the menu

					//declare the elements that make up each menu option
					let dish = document.createElement("div");
					let title = document.createElement("h2");

					let cost = document.createElement("h3");
					cost.setAttribute("value", `${dishPrice}`);

					//set their values
					title.innerHTML = dishName;

					cost.innerHTML = `$${dishPrice}`;

					//create a checkbox input and corresponding select input
					let yesorno = document.createElement("input");
					yesorno.setAttribute("type", "checkbox");
					yesorno.setAttribute("name", "order");
					yesorno.setAttribute("value", `${dishName}`);

                    let spanElement = document.createElement("span");
                    spanElement.classList.add("checkmark");

					let menuItemArray = [];
					menuItemArray.push(yesorno);
					menuItemArray.push(dishName);

					let quantity = document.createElement("select");
					quantity.setAttribute("name", "quantity");
					menuItemArray.push(quantity);
					menuItemArray.push(dishPrice);
					arrayOfInputsForObjectifying.push(menuItemArray);

					//creating ten options for quantity to allow customers to order up to ten dishes
					let quantityChild1 = document.createElement("option");
					quantityChild1.setAttribute("value", "1");
					quantityChild1.innerHTML = "One";
					let quantityChild2 = document.createElement("option");
					quantityChild2.setAttribute("value", "2");
					quantityChild2.innerHTML = "Two";
					let quantityChild3 = document.createElement("option");
					quantityChild3.setAttribute("value", "3");
					quantityChild3.innerHTML = "Three";
					let quantityChild4 = document.createElement("option");
					quantityChild4.setAttribute("value", "4");
					quantityChild4.innerHTML = "Four";
					let quantityChild5 = document.createElement("option");
					quantityChild5.setAttribute("value", "5");
					quantityChild5.innerHTML = "Five";
					let quantityChild6 = document.createElement("option");
					quantityChild6.setAttribute("value", "6");
					quantityChild6.innerHTML = "Six";
					let quantityChild7 = document.createElement("option");
					quantityChild7.setAttribute("value", "7");
					quantityChild7.innerHTML = "Seven";
					let quantityChild8 = document.createElement("option");
					quantityChild8.setAttribute("value", "8");
					quantityChild8.innerHTML = "Eight";
					let quantityChild9 = document.createElement("option");
					quantityChild9.setAttribute("value", "9");
					quantityChild9.innerHTML = "Nine";
					let quantityChild10 = document.createElement("option");
					quantityChild10.setAttribute("value", "10");
					quantityChild10.innerHTML = "Ten";
					//whew, that's a lotta options

					//append the children
					quantity.append(quantityChild1, quantityChild2, quantityChild3, quantityChild4, quantityChild5, quantityChild6, quantityChild7, quantityChild8, quantityChild9, quantityChild10);

					//this if statement accounts for "menu items" that are just featured events coming
					//up that you can attend, but aren't really menu items properly speaking
					if (dishPrice == 0) {
						dish.append(title);
					} else if (dishPrice > 0) {
						dish.append(title, cost, yesorno, spanElement, quantity);
					}
					menuSubSection.append(dish);
				});
				specificRestaurant.append(menuSubSection);

				let applyOrderBtn = document.createElement("button");
				applyOrderBtn.setAttribute("type", "submit");
                specificRestaurant.append(applyOrderBtn);

				applyOrderBtn.addEventListener("click", function (event) {
					display(specificRestaurant);
					let exampleData = makeOrderObjArr(arrayOfInputsForObjectifying);
					createTotalModal(exampleData);
				});
			});
		});
	});
	// return orderButtons;
}

function makeOrderObjArr(arrOfElements) {
	let arr = [];
	arrOfElements.forEach((input) => {
		let foodItemArray = input;
		if (foodItemArray[0].value === true) {
			arr += {
				food: foodItemArray[1],
				quantity: foodItemArray[2].value,
				price: foodItemArray[3],
			};
		}
	});
	return arr;
}
