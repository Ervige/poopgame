export function spawnPoop(position) {
  if (!position) {
    const dog = document.querySelector(".dog");
    const currentDogPosition = +dog.getAttribute("data-position");

    position = currentDogPosition;
  }

  const poop = document.createElement("div");
  poop.classList.add("poop");

  const newPoopField = document.querySelector(`[data-fieldid='${position}']`);

  console.log("newPoopField", newPoopField);

  if (newPoopField) {
    poop.setAttribute("data-position", position);

    newPoopField.appendChild(poop);
  }
}
