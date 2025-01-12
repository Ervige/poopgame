export function spawnPoop(position) {
  if (!position) {
    const dog = document.querySelector(".dog");
    const currentDogPosition = +dog.getAttribute("data-position");

    position = currentDogPosition;
  }

  const poop = document.createElement("div");
  poop.classList.add("poop");

  const newPoopField = document.querySelector(`[data-fieldid='${position}']`);

  if (newPoopField) {
    poop.setAttribute("data-position", position);

    newPoopField.appendChild(poop);
  }
}
