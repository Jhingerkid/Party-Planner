// var exampleData = [{food: "burger", quantity : "1", price : "2.00"},{food: "pizza", quantity : "3", price : "5.00"},{food: "hotdog", quantity : "2", price : "1.50"}]

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
    modalName.innerHTML = "Your total is:"
    // populate the list here
    // before this is completed, we need to agree on what data is sent here
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