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
    restaurantDesc.innerHTML = restaurant.restaurant_phone;
    // assign a source to the background image
    let name = restaurant.restaurant_name.replace(/\s/g, ''); // remove spaces from name string
    let src = "images/" + name + "-banner.png";
    orderImg.src = src;
    orderImg.alt = restaurant.restaurant_name
    // construct the list of menu items
    let restaurantMenus = restaurant.menus;
    // let menuItems = document.createElement("div");
    // menuItems.classList.add("menu-items-box")
    restaurantMenus.forEach(menu => {
        menu.menu_sections.forEach((section, sectionIndex) => {
            //Make the menu headings that will contain the appropriate menu items
            let sectionTitle = restaurant.menus[0].menu_sections[sectionIndex].section_name;
            let menuSubSection = document.createElement("div");
            menuSubSection.classList.add("menu-items-box");
            let menuSubSectionTitle = document.createElement("h1");
            
            menuSubSectionTitle.innerHTML = sectionTitle;
            menuSubSection.append(menuSubSectionTitle);




            section.menu_items.forEach(item => {
                // create elements for the menu item
                let itemDiv = document.createElement("div");
                let itemName = document.createElement("h3");
                let itemDesc = document.createElement("p");
                let itemPrice = document.createElement("h4");
                let itemInput = document.createElement("input");
                // assign classes to each element
                itemDiv.classList.add("menu-item");
                itemName.classList.add("example");
                itemDesc.classList.add("example");
                itemPrice.classList.add("example");
                itemInput.classList.add("example");
                itemInput.setAttribute("type", "number");


                // assign the innerHTML of each item
                itemName.innerHTML = item.name;
                itemDesc.innerHTML = item.description;
                itemPrice.innerHTML = "$" + item.price.toFixed(2);
                // add an order button to the item
                let addToOrder = document.createElement("button");
                addToOrder.innerHTML = "Add to Order";
                // add an event listener to the order button that adds to the current items ordered and running total
                addToOrder.addEventListener("click", function(event){
                    //validate the itemInput value
                    if((Math.floor(itemInput.value) !== +itemInput.value) || (+itemInput.value < 1)) {
                        return;
                    }
                    
                    let newItem = {food: item.name, quantity : itemInput.value, price : item.price, location : restaurant.restaurant_name}; // this should be a class or something but I'm tired
                    window.orderedItems.push(newItem);
                    let currentTotal = document.querySelector(".running-total").innerHTML.replace(/\$/g, '');
                    let newTotal = Number(currentTotal) + Number((Number(itemInput.value) * item.price));
                    document.querySelector(".running-total").innerHTML = "$" + newTotal.toFixed(2);
                    let newTotalCount = Number(document.querySelector(".active-count").innerHTML) + Number(itemInput.value);
                    document.querySelector(".active-count").innerHTML = newTotalCount;
                });
                // append the created elements to the item div
                itemDiv.append(itemName, itemDesc, itemPrice, itemInput, addToOrder);
                // append the item div to its corresponding subsection div
                menuSubSection.append(itemDiv);
            })
            menuFormBox.append(menuSubSection);
        });
    });
    // add the menuItems to the form
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