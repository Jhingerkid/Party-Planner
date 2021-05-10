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
	console.log(menuData); // the initial array of data that is retrieved
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
    console.log(restaurantList);
    restaurantList.forEach(restaurant => {
        // declare the elements that will make up each restaurant
        let restaurantItem = document.createElement("div");
        let restaurantName = document.createElement("h2");
        let restaurantDesc = document.createElement("p");
        let restaurantOrder = document.createElement("button");
        // give each element a class
        restaurantItem.classList.add("restaurant-item");
        restaurantName.classList.add("restaurant-name");
        restaurantDesc.classList.add("restaurant-desc");
        restaurantOrder.classList.add("restaurant-order");
        // populate the innerhtml for each element
        restaurantName.innerHTML = restaurant.restaurant_name;
        restaurantDesc.innerHTML = "description";
        restaurantOrder.innerHTML = "Order from " + restaurant.restaurant_name;
        // add an event listener to the order button
        restaurantOrder.addEventListener("click", function () {
            // when clicked this should populate restaurant-description-box and menu-forms-box on the bottom of the page
        });
        // append element to div
        restaurantItem.append(restaurantName, restaurantDesc, restaurantOrder);
        // append the new div
        document.querySelector(".main-page").append(restaurantItem);
    });
  }
