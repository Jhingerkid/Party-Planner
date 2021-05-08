export function display(displayMe) {
  let parent = document.querySelector(".main-content-box");
  parent.content.remove(); // if this doesnt work
  let view = displayMe.content.cloneNode(true);

  let backButton = displayMe.backButton;
  let nextButton = displayMe.nexButton;

  parent.appendChild(view);
  return [backButton, nextButton];
}
