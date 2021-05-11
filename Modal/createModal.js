export function createTotalModal (exampleData) {
    // declare the elements that within the modal
    let modal = document.createElement("div");
    let modalName = document.createElement("h2");
    let modalList= document.createElement("ol");
    // give each element a class
    modal.classList.add("modal");
    modalName.classList.add("modal-name");
    modalList.classList.add("modal-list-desc");
    // populate the innerhtml for each element
    modalName.innerHTML = "Your total is: $" + totalPrice(exampleData).toFixed(2);
    // populate the list here
    exampleData.forEach(order => {
        let lineItem = document.createElement("li");
        lineItem.innerHTML = order.quantity + " " + order.food + "(s) for $" + order.price + " each"; 
        modalList.append(lineItem);
    });
    // create a back button (I can't wait for react)
    let back = document.createElement("button");
    back.innerHTML = "Back";
    back.classList.add("back");
    back.addEventListener("click", function () {
    modal.remove();
    });
    // add elements to modal
    modal.append(modalName, modalList, back);
    // append modal to body
    document.querySelector(".main-content-box").append(modal);
}

function totalPrice (orderedItems) {
    var total = 0;
    orderedItems.forEach(ticket => {
        total = total + ticket.price * ticket.quantity;
    })
    return total;
}