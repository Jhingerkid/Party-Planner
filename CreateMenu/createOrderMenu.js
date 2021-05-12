export function createOrderMenu(restaurant) {
    // declare the elements that will make up the order form image
    let orderImgBox = document.createElement("div");
    let orderImg = document.createElement("img");
    // declare the elements that will make up the order form description
    let restaurantDescBox = document.createElement("div");
    let restaurantTitle = document.createElement("h2");
    let restaurantDesc = document.createElement("p");
    // declare the elements that will make up the order form items
    let menuFormBox = document.createElement("div");
    let menuForm = document.createElement("form");
    // give each element a class
    orderImgBox.classList.add("restaurant-img-box");
    orderImg.classList.add("menu-background-img");
    restaurantDescBox.classList.add("restaurant-description-box");
    menuFormBox.classList.add("menu-form-box");
    // populate the innerhtml of the restaurant title/desc
    restaurantTitle.innerHTML = restaurant.restaurant_name;
    restaurantDesc.innerHTML = "placeholder";
    // assign a source to the background image
    let name = restaurant.restaurant_name.replace(/\s/g, ''); // remove spaces from name string
    let src = "images/" + name + "-banner.png";
    orderImg.src = src;
    orderImg.alt = restaurant.restaurant_name
    // construct the list of menu items
    let restaurantMenus = restaurant.menus;
    restaurantMenus.forEach(menu => {
        console.log(menu.menu_sections);
        menu.menu_sections.forEach(section => {
            console.log(section.menu_items);
            section.menu_items.forEach(item => {
                console.log(item);
            })
        });
    });
    // remove the old screen
    document.querySelector(".main-content-box").firstElementChild.remove();	
    // append the elements to their divs
    orderImgBox.append(orderImg);
    restaurantDescBox.append(restaurantTitle, restaurantDesc);
    menuFormBox.append(menuForm);
    // append divs to new screen
    let parent = document.querySelector(".main-content-box");
	let tempBox = document.createElement("div");
    tempBox.classList.add("restaurant-menu");
    tempBox.append(orderImgBox, restaurantDescBox, menuFormBox);
	parent.appendChild(tempBox);
}