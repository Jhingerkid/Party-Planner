export function display(displayMe) {
	document.querySelector(".main-content-box").firstElementChild.remove(); // clear page

	let parent = document.createElement("div");
	parent.classList.add(displayMe.class);
	document.querySelector(".main-content-box").appendChild(parent);

	let view = document.createElement("div");
	if (displayMe.id) {
		view.classList.add(displayMe.id); // makes classes of the ids so the css doesnt mess with the templates
	}
//   console.log(displayMe);
	view.appendChild(displayMe.content.cloneNode(true));
	parent.appendChild(view);
	return;
}
